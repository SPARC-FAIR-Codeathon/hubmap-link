from pathlib import Path

from opencmiss.zinc.context import Context
from opencmiss.zinc.region import Region
from opencmiss.zinc.result import RESULT_OK


def load_organ_scaffold(file_path: Path) -> Region:
    context = Context("HuBMAP-SPARC Scaffold")
    region = context.getDefaultRegion()
    r = region.readFile(str(file_path))
    assert r == RESULT_OK, f"Could not load scaffold file {file_path}."

    return region
