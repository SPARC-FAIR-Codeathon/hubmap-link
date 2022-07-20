import os
import sys
import json
import argparse

from src.organ_scaffold import load_organ_scaffold
from src.rui_locations import RuiLocations
from src.block import TissueBlock
from src.field_utils import create_fields_transformations


class ProgramArguments(object):
    def __init__(self):
        self.organ_scaffold = None
        self.config = None
        self.rui = None
        self.block_index = None
        self.output = None


def main():
    args = parse_args()
    if os.path.exists(args.organ_scaffold) and os.path.exists(args.config) and os.path.exists(args.rui):
        # load organ scaffold
        organ_region = load_organ_scaffold(args.organ_scaffold)
        organ_fieldmodule = organ_region.getFieldmodule()
        organ_coordinates = organ_fieldmodule.findFieldByName('coordinates')

        # get default transformation
        with open(args.config, 'r') as config_file:
            content = json.load(config_file)
        transform = content['humanHeart_F']
        initial_scale = transform['transformation']['Scale']
        initial_rotation = transform['transformation']['Rotation']
        initial_translation = transform['transformation']['Translation']

        # get RUI locations
        rui = RuiLocations(filename=args.rui)
        block_index = args.block_index if args.block_index is not None else 0
        if args.block_index is None:
            placement = rui.get_rui_data_by_index(index=block_index)
        else:
            placement = rui.get_rui_data_by_index(index=int(block_index))

        # generate a tissue block
        block = TissueBlock(name=f'block_{block_index}')
        block_region = block.get_region()
        block_coordinates = block.get_coordinates()
        block_fieldmodule = block.get_fieldmodule()

        # perform the initial transformation to place the block in the organ coordinate space
        block_coordinates_transformed = create_fields_transformations(block_coordinates,
                                                                      initial_rotation,
                                                                      initial_scale,
                                                                      initial_translation)[0]
        field_assignment = block_fieldmodule.findFieldByName('coordinates').createFieldassignment(
            block_coordinates_transformed)
        result = field_assignment.assign()

        # perform the final transformation using the RUI locations
        if placement['scale'][0] == placement['scale'][1] == placement['scale'][2]:
            scale = placement['scale'][0]
        else:
            raise ValueError('Tissue block needs to have isometric scaling.')
        block_coordinates_transformed = create_fields_transformations(block_coordinates,
                                                                      [0., 0., 0.],  # temp: need to fix rotation
                                                                      float(scale),
                                                                      list(placement['translation']),
                                                                      translation_scale_factor=initial_scale * 0.1)[0]
        field_assignment = block_fieldmodule.findFieldByName('coordinates').createFieldassignment(
            block_coordinates_transformed)
        result = field_assignment.assign()

        # write out the transformed block
        if args.output is None:
            output_dir = os.path.dirname(args.organ_scaffold)
            output_file = f'block_{block_index}.exf'
            output_path = os.path.join(output_dir, output_file)
        else:
            output_path = args.output

        block_region.writeFile(output_path)

    else:
        sys.exit(-1)


def parse_args():
    parser = argparse.ArgumentParser(description="Transform HubMap extracted data files to ex format.")
    parser.add_argument("--organ-scaffold", help="Location of the input organ scaffold EX file.")
    parser.add_argument("--config", help="Location of the transformation config file.")
    parser.add_argument("--rui", help="Location of the RUI Locations file.")
    parser.add_argument("--block-index", help="Index of the tissue block to register."
                                              "Default is 0.")
    parser.add_argument("--output", help="Location of the output EX file.")

    program_arguments = ProgramArguments()
    parser.parse_args(namespace=program_arguments)

    return program_arguments


if __name__ == "__main__":
    main()
