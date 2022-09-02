# HuBMAP & SPARC Linkage - Registering tissue blocks

The `tissue-block` module contains codes map between HuBMAP CCF tissue blocks to SPARC Scaffold and vice versa.


## Requirements
- OpenCMISS ZINC
- ScaffoldMaker
- Scipy
- Numpy

## Usage

### Map from HuBMAP CCF to SPARC Scaffold:

```
> python ccf-to-scaffold.py --organ-scaffold <path/to/organ-scaffold.exf> --config <path/to/config> --sex <F/M> --rui <path/to/rui_locations.json> --block-id <Donor#> --output <path/to/output/dir>
```


The code requires a registered scaffold, the organ entities JSON file, and the RUI locations JSON file. The entities
file contains transformation information about the organ within the body. Since the registered scaffold is in the 
"organ" coordinate space, we need to take into account the transformation of the organ to the "body" coordinate space.
This serves as the initial step.

Next, using the RUI locations in the JSON file, we can fetch the required information of the specific tissue block based
on the given Donor `@id`. The main information are:

- `x_dimension`,
- `y_dimension`,
- `z_dimension`,
- `x_scaling`,
- `y_scaling`,
- `z_scaling`,
- `x_rotation`,
- `y_rotation`,
- `z_rotation`,
- `x_translation`,
- `y_translation`,
- `z_translation`.

We store all the information above in a dictionary, `__settings__`. Using the ScaffoldMaker library, we then generate a 
'3D Box 1' mesh to initialize our template Tissue Block. The tissue block then gets morphed and transformed to the organ 
using the final transformation data. The output of the code is the block in EXF format which is the OpenCMISS ZINC data
file format.


### Map from SPARC Scaffold to HuBMAP RUI:

```
> python scaffold-to-ccf.py --block_ex <path/to/tissue_block.exf> --output <path/to/output/dir> --id <id> --description <description> --creator <name> --sex <F/M>
```

This module takes a tissue block in OpenCMISS-ZINC EX format as input and outputs a JSON file containing the
transformation data required to place the block into HuBMAP CCF.

*** Note that the output JSON file contains only the transformation data. Other entries in the file are 'dummy' data 
for the time being.


### Export to JSON web components for web visualization:

Registered tissue blocks from CCF to SPARC Scaffold can be exported to web-friendly files for hosting them on a web 
portal. The original files are in the proprietary format of OpenCMISS-ZINC EX file specifications. The open-source
application of [CMGUI](https://physiomeproject.org/software/opencmiss/cmgui/download) allows for exporting the files
into JSON files containing data of primitives readable using ThreeJS for web browser rendering of 3D surfaces.

To do this, all you need to do is to download CMGUI, run the application,
read the EX files (see CMGUI documentation for further details) and write the outputs by entering the following scripts
into the CMGUI script field:

```console
gfx export threejs <file_prefix NAME> <scene PATH_TO_SCENE[/]>
```
