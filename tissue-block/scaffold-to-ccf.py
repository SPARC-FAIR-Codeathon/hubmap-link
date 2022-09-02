import os
import json
import argparse

from typing import Dict, List

import uuid
import time

from math import pi

import numpy as np
from scipy.spatial.transform import Rotation

from opencmiss.zinc.context import Context
from opencmiss.zinc.field import Field
from opencmiss.zinc.result import RESULT_OK
from opencmiss.utils.zinc.general import ChangeManager

from .field_utils import evaluate_field_mesh_integral, create_fields_transformations, extract_nodal_parameters
from .transformation import find_transformation
from .block import TissueBlock
from .rui_template import rui_template

__unit_scale__ = 0.001
__rad2pi = 180. / pi
__corr_factor = 1.e-1

__settings__ = dict()
__rui__ = dict()


class ProgramArguments(object):
    def __init__(self):
        self.block_ex = None
        self.id = None
        self.description = None
        self.creator = None
        self.sex = None
        self.output = None


def __div(u, c):
    return [u[i] / c for i in range(len(u))]


def __load_block_ex(input_file: str):
    context = Context("HuBMAP-SPARC Scaffold")
    __settings__['block_region'] = context.getDefaultRegion()
    result = __settings__['block_region'].readFile(input_file)
    assert result == RESULT_OK, f'Could not load tissue block EX file {input_file}.'
    __settings__['block_fieldmodule'] = __settings__['block_region'].getFieldmodule()
    __settings__['block_coordinates'] = __settings__['block_fieldmodule'].findFieldByName('coordinates')
    __settings__['block_nodeset'] = __settings__['block_fieldmodule'].findNodesetByFieldDomainType(
        Field.DOMAIN_TYPE_NODES)
    __settings__['block_cache'] = __settings__['block_fieldmodule'].createFieldcache()


def __get_block_centre_of_mass():
    fieldmodule = __settings__['block_fieldmodule']
    coordinates = __settings__['block_coordinates']
    with ChangeManager(fieldmodule):
        one = fieldmodule.createFieldConstant(1.0)
        mesh_group = fieldmodule
        coordinates_integral = evaluate_field_mesh_integral(coordinates,
                                                            coordinates,
                                                            mesh_group)
        mass = evaluate_field_mesh_integral(one, coordinates, mesh_group)
        mean_model_coordinates = __div(coordinates_integral, mass)

    return mean_model_coordinates


def __find_transformation() -> Dict:
    reference_block = TissueBlock(name='reference_block')
    reference_block_region = reference_block.get_region()
    reference_block_coordinates = reference_block.get_coordinates()
    reference_block_fieldmodule = reference_block.get_fieldmodule()
    reference_block_nodeset = reference_block_fieldmodule.findNodesetByFieldDomainType(Field.DOMAIN_TYPE_NODES)
    reference_block_cache = reference_block_fieldmodule.createFieldcache()

    init_bbox = create_fields_transformations(reference_block_coordinates,
                                              [0., 0., 0.],
                                              __unit_scale__,
                                              [0., 0., 0.])[0]
    field_assignment = reference_block_fieldmodule.findFieldByName('coordinates').createFieldassignment(init_bbox)
    field_assignment.assign()

    reference_params = extract_nodal_parameters(reference_block_coordinates, reference_block_nodeset,
                                                reference_block_cache)

    target_block_fieldmodule = __settings__['block_fieldmodule']
    target_block_coordinates = __settings__['block_coordinates']
    target_nodeset = __settings__['block_nodeset']
    target_cache = __settings__['block_cache']
    target_parms = extract_nodal_parameters(target_block_coordinates, target_nodeset, target_cache)
    __rui__['x_translation'] = target_parms[0][0] * -1
    __rui__['y_translation'] = target_parms[0][1] * -1
    __rui__['z_translation'] = target_parms[0][2] * -1
    reference_params = np.asarray(reference_params) / __unit_scale__
    target_parms = np.asarray(target_parms) / __unit_scale__

    _, _, transformation = find_transformation(reference_params, target_parms)

    __rui__['x_dimension'] = transformation['scale'] / (__unit_scale__ / __corr_factor)
    __rui__['y_dimension'] = transformation['scale'] / (__unit_scale__ / __corr_factor)
    __rui__['z_dimension'] = transformation['scale'] / (__unit_scale__ / __corr_factor)

    r_matrix = Rotation.from_matrix(transformation['rotation'])
    r_euler = r_matrix.as_euler('xyz', degrees=True)
    __rui__['x_rotation'] = r_euler[0]
    __rui__['y_rotation'] = r_euler[1]
    __rui__['z_rotation'] = r_euler[2]

    __rui__['x_scaling'] = transformation['scale'] / __corr_factor
    __rui__['y_scaling'] = transformation['scale'] / __corr_factor
    __rui__['z_scaling'] = transformation['scale'] / __corr_factor

    return transformation


def __write_rui_json(content: List, output_path: str) -> None:
    rui_template['@graph'][0]['@id'] = content[0]
    rui_template['@graph'][0]['description'] = content[1]
    rui_template['@graph'][0]['provider_uuid'] = str(uuid.uuid4())
    rui_template['@graph'][0]['samples'][0]['@id'] = content[0]
    rui_template['@graph'][0]['samples'][0]['description'] = content[1]
    rui_template['@graph'][0]['samples'][0]['rui_location']['@id'] = content[0]
    rui_template['@graph'][0]['samples'][0]['rui_location']['creator'] = content[2]
    rui_template['@graph'][0]['samples'][0]['rui_location']['creation_date'] = time.strftime('%Y-%m-%d')

    rui_template['@graph'][0]['samples'][0]['rui_location']['x_dimension'] = __rui__['x_dimension']
    rui_template['@graph'][0]['samples'][0]['rui_location']['y_dimension'] = __rui__['y_dimension']
    rui_template['@graph'][0]['samples'][0]['rui_location']['z_dimension'] = __rui__['z_dimension']

    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['@id'] = content[0]
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['target'] = content[3]
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['placement_date'] = time.strftime('%Y-%m-%d')

    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['x_scaling'] = __rui__['x_scaling']
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['y_scaling'] = __rui__['y_scaling']
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['z_scaling'] = __rui__['z_scaling']

    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['x_rotation'] = __rui__['x_rotation']
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['y_rotation'] = __rui__['y_rotation']
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['z_rotation'] = __rui__['z_rotation']

    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['x_translation'] = __rui__['x_translation']
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['y_translation'] = __rui__['y_translation']
    rui_template['@graph'][0]['samples'][0]['rui_location']['placement']['z_translation'] = __rui__['z_translation']

    with open(output_path, 'w') as rui:
        json.dump(rui_template, rui,
                  sort_keys=True,
                  indent=4,
                  separators=(',', ': ')
                  )


def main():
    args = parse_args()

    if os.path.exists(args.block_ex):
        __load_block_ex(args.block_ex)
        tform = __find_transformation()

        json_filename = os.path.basename(args.block_ex).split('.')[0]

        if not os.path.exists(args.output):
            os.makedirs(args.output)

        id = args.id
        description = args.description
        creator = args.creator
        sex = args.sex

        if args.sex == 'M' or args.sex == 'Male':
            target = "http://purl.org/ccf/latest/ccf.owl#VHMHeart"
        elif args.sex == 'F' or args.sex == 'Female':
            target = "http://purl.org/ccf/latest/ccf.owl#VHFHeart"
        else:
            raise ValueError(f'Invalid value for sex {sex}')

        __write_rui_json([id, description, creator, target], os.path.join(args.output, json_filename + '.json'))


def parse_args():
    parser = argparse.ArgumentParser(description="Transform SPARC EX tissue block to HuBMAP CCF RUI.")
    parser.add_argument("--block_ex", help="Location of the input tissue block EX file.")
    parser.add_argument("--id", help="ID of tissue block.")
    parser.add_argument("--description", help="Description about the tissue block registration.")
    parser.add_argument("--creator", help="Name of the registration creator.")
    parser.add_argument("--sex", help="Sex of the sample.")
    parser.add_argument("--output", help="Location of the output JSON file.")

    program_arguments = ProgramArguments()
    parser.parse_args(namespace=program_arguments)

    return program_arguments


if __name__ == '__main__':
    main()
