import os
import sys
import json
import argparse
from typing import Dict

from math import pi

from scipy.spatial.transform import Rotation

from src.rui_locations import RuiLocations
from src.block import TissueBlock
from src.field_utils import create_fields_transformations

from opencmiss.zinc.context import Context
from opencmiss.zinc.result import RESULT_OK

__unit_scale__ = 0.001
__deg2rad__ = pi / 180.

__settings__ = dict()


class ProgramArguments(object):
    def __init__(self):
        self.organ_scaffold = None
        self.config = None
        self.sex = None
        self.rui = None
        self.block_id = None
        self.output = None


def __generate_bounding_box(settings: Dict) -> None:
    label = settings['label']
    sex = settings['sex']
    dimensions = settings['bbox_dimensions']
    output_dir = settings['output_dir']

    bbox = TissueBlock(name=f'bbox_{label}_{sex}')
    bbox_region = bbox.get_region()
    bbox_coordinates = bbox.get_coordinates()
    bbox_fieldmodule = bbox.get_fieldmodule()

    init_bbox = create_fields_transformations(bbox_coordinates,
                                              [0., 0., 0.],
                                              __unit_scale__,
                                              [0., 0., 0.])[0]
    field_assignment = bbox_fieldmodule.findFieldByName('coordinates').createFieldassignment(
        init_bbox)
    field_assignment.assign()

    final_bbox = create_fields_transformations(bbox_coordinates,
                                               [0., 0., 0.],
                                               dimensions,
                                               [0., 0., 0.])[0]

    field_assignment = bbox_fieldmodule.findFieldByName('coordinates').createFieldassignment(
        final_bbox)
    field_assignment.assign()

    bbox_region.writeFile(os.path.join(output_dir, f'bbox_{label}_{sex}.exf'))


def __generate_tissue_block(settings: Dict) -> None:
    label = settings['label']
    sex = settings['sex']
    block_index = settings['block_index']
    output_dir = settings['output_dir']
    translation = settings['rui_translation']
    rotation = settings['rui_rotation']
    scale = settings['rui_scale']
    dimensions = settings['rui_dimension']
    initial_translation = settings['initial_object_translation']
    initial_rotation = settings['initial_object_rotation']

    block = TissueBlock(name=f'block_{sex}_{label}_{block_index}')
    block_region = block.get_region()
    block_coordinates = block.get_coordinates()
    block_fieldmodule = block.get_fieldmodule()

    block_region.writeFile(os.path.join(output_dir, 'block_origin.exf'))

    # perform the initial transformation to place the block in the organ coordinate space
    r_xyz = Rotation.from_euler('xyz', list(initial_rotation), degrees=True)
    r_zyx = r_xyz.as_euler('zyx', degrees=False)

    block_coordinates_transformed = create_fields_transformations(block_coordinates,
                                                                  list(r_zyx),
                                                                  __unit_scale__,
                                                                  list([0, 0, 0]),
                                                                  translation_scale_factor=__unit_scale__)[0]
    field_assignment = block_fieldmodule.findFieldByName('coordinates').createFieldassignment(
        block_coordinates_transformed)
    field_assignment.assign()

    block_region.writeFile(os.path.join(output_dir, 'block_init_transform.exf'))

    # perform the final transformation to place the block in the correct location
    # t = [x + y for x, y in zip(translation, initial_translation)]
    t = list(translation)
    r_xyz = Rotation.from_euler('xyz', list(rotation), degrees=True)
    r_zyx = r_xyz.as_euler('zyx', degrees=False)
    # r = [float(f'{x * __deg2rad__:.2f}') for x in list(rotation)]
    s = [x * y for x, y in zip(scale, dimensions)]

    block_coordinates_transformed = create_fields_transformations(block_coordinates,
                                                                  list(r_zyx),
                                                                  s,
                                                                  t,
                                                                  __unit_scale__)[0]

    field_assignment = block_fieldmodule.findFieldByName('coordinates').createFieldassignment(
        block_coordinates_transformed)
    field_assignment.assign()

    # write out the transformed block
    block_index = block_index.split('#')[-1]
    block_region.writeFile(os.path.join(output_dir, f'block_{sex}_{label}_{block_index}.exf'))


def __load_entity(input_file: str, sex: str) -> None:
    with open(input_file, 'r') as config_file:
        content = json.load(config_file)

    if sex.casefold() == 'F'.casefold() or sex.casefold() == 'Female'.casefold():
        __settings__['sex'] = 'Female'
    elif sex.casefold() == 'M'.casefold() or sex.casefold() == 'Male'.casefold():
        __settings__['sex'] = 'Male'
    else:
        raise KeyError(f'Invalid argument for "sex" {sex}.')
    content_id = next((index for (index, d) in enumerate(content) if d['sex'] == __settings__['sex']), None)
    content = content[content_id]

    initial_placement = content['object']['placement']
    __settings__['label'] = content['label']

    __settings__['bbox_dimensions'] = [content['x_dimension'],
                                       content['y_dimension'],
                                       content['z_dimension']]

    __settings__['initial_object_translation'] = [initial_placement['x_translation'],
                                                  initial_placement['y_translation'],
                                                  initial_placement['z_translation']]

    __settings__['initial_object_rotation'] = [initial_placement['x_rotation'],
                                               initial_placement['y_rotation'],
                                               initial_placement['z_rotation']]


def __load_organ_scaffold(input_file: str) -> None:
    context = Context("HuBMAP-SPARC Scaffold")
    __settings__['organ_region'] = context.getDefaultRegion()
    result = __settings__['organ_region'].readFile(input_file)
    assert result == RESULT_OK, f'Could not load scaffold file {input_file}.'
    __settings__['organ_fieldmodule'] = __settings__['organ_region'].getFieldmodule()
    __settings__['organ_coordinates'] = __settings__['organ_fieldmodule'].findFieldByName('coordinates')
    __settings__['output_dir'] = os.path.dirname(input_file)


def __load_rui(input_file: str, block_id: str) -> None:
    rui = RuiLocations(filename=input_file)
    placement = rui.get_rui_data_by_index(block_id=block_id)

    __settings__['block_index'] = block_id
    __settings__['rui_translation'] = placement['translation']
    __settings__['rui_rotation'] = placement['rotation']
    __settings__['rui_scale'] = placement['scale']
    __settings__['rui_dimension'] = placement['dimensions']


def __load_organ_scaffold_in_bbox(input_file: str, settings: Dict) -> None:
    context = Context("HuBMAP-SPARC Scaffold")
    __settings__['organ_region'] = context.getDefaultRegion()
    result = __settings__['organ_region'].readFile(input_file)
    assert result == RESULT_OK, f'Could not load scaffold file {input_file}.'
    __settings__['organ_fieldmodule'] = __settings__['organ_region'].getFieldmodule()
    __settings__['organ_coordinates'] = __settings__['organ_fieldmodule'].findFieldByName('coordinates')

    label = settings['label']
    sex = settings['sex']
    organ_region = settings['organ_region']
    organ_fieldmodule = settings['organ_fieldmodule']
    organ_coordinates = settings['organ_coordinates']
    initial_translation = settings['initial_object_translation']
    initial_rotation = settings['initial_object_rotation']
    output_dir = settings['output_dir']

    initial_translation = [initial_translation[0],
                           initial_translation[1],
                           initial_translation[2]]

    # transform the organ from the 'body space' to 'organ space' coordinates
    r_xyz = Rotation.from_euler('xyz', list(initial_rotation), degrees=True)
    r_zyx = r_xyz.as_euler('zyx', degrees=False)

    organ_coordinates_transformed = create_fields_transformations(organ_coordinates,
                                                                  list(r_zyx),
                                                                  1.,
                                                                  initial_translation,
                                                                  __unit_scale__)[0]
    field_assignment = organ_fieldmodule.findFieldByName('coordinates').createFieldassignment(
        organ_coordinates_transformed)
    field_assignment.assign()

    organ_region.writeFile(os.path.join(output_dir, f'scaffold_{label}_{sex}_transformed.exf'))


def main():
    args = parse_args()

    if os.path.exists(args.organ_scaffold) and os.path.exists(args.config) and os.path.exists(args.rui):

        __settings__['output_dir'] = os.path.dirname(args.organ_scaffold)

        # get entity information
        __load_entity(args.config, args.sex)

        # get RUI locations
        __load_rui(args.rui, args.block_id)

        # generate bbox
        __generate_bounding_box(__settings__)

        # load the organ scaffold & place organ in the bbox
        __load_organ_scaffold_in_bbox(args.organ_scaffold, __settings__)

        # generate a tissue block
        __generate_tissue_block(__settings__)
    else:
        sys.exit(-1)


def parse_args():
    parser = argparse.ArgumentParser(description="Transform HubMap extracted data files to ex format.")
    parser.add_argument("--organ-scaffold", help="Location of the input organ scaffold EX file.")
    parser.add_argument("--config", help="Location of the transformation config file.")
    parser.add_argument("--sex", help="Female or Male."
                                      "Options: ['F', 'Female', 'M', 'Male'.")
    parser.add_argument("--rui", help="Location of the RUI Locations file.")
    parser.add_argument("--block-id", help="ID of the donor block.")
    parser.add_argument("--output", help="Location of the output EX file.")

    program_arguments = ProgramArguments()
    parser.parse_args(namespace=program_arguments)

    return program_arguments


if __name__ == "__main__":
    main()
