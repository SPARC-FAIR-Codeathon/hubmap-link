import json

from typing import Dict


class RuiLocations:

    def __init__(self, filename: str) -> None:
        with open(filename, 'r') as rui_json:
            self._content = json.load(rui_json)

        self._graph = self._content['@graph']

    def get_rui_data_by_index(self, index: int) -> Dict:
        donor = self._graph[index]
        rui_location = donor['samples'][0]['rui_location']
        transformation_field = rui_location['placement']

        dimensions = (rui_location['x_dimension'], rui_location['y_dimension'], rui_location['z_dimension'])
        scale = (transformation_field['x_scaling'],
                 transformation_field['y_scaling'],
                 transformation_field['z_scaling'])
        rotation = (transformation_field['x_rotation'],
                    transformation_field['y_rotation'],
                    transformation_field['z_rotation'])
        translation = (transformation_field['x_translation'],
                       transformation_field['y_translation'],
                       transformation_field['z_translation'])

        return {'dimensions': dimensions,
                'translation': translation,
                'rotation': rotation,
                'scale': scale}
