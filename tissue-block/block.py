from __future__ import division
from opencmiss.zinc.context import Context

from scaffoldmaker.scaffoldpackage import ScaffoldPackage
from scaffoldmaker.scaffolds import Scaffolds


def div(u, c):
    return [u[i] / c for i in range(len(u))]


class TissueBlock:

    def __init__(self, name: str):
        self._context = Context(name)
        self._region = self._context.getDefaultRegion()
        self._fieldmodule = None
        self._coordinates = None

        # generate the tissue block using the ScaffoldMaker library
        self._generate()

    def _generate(self):
        scaffolds = Scaffolds()
        scaffold_type = scaffolds.getDefaultScaffoldType()
        scaffold_package = ScaffoldPackage(scaffold_type)
        scaffold_package.generate(self._region, applyTransformation=False)
        self._fieldmodule = self._region.getFieldmodule()
        self._coordinates = self._fieldmodule.findFieldByName('coordinates')

    def get_fieldmodule(self):
        return self._fieldmodule

    def get_coordinates(self):
        return self._coordinates

    def get_region(self):
        return self._region
