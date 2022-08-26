# HuBMAP & SPARC Linkage - Registering tissue blocks

The `tissue-block` module contains codes to generate tissue blocks in SPARC Scaffold using the RUI locations from the
JSON file. 

## Requirements
- OpenCMISS ZINC
- ScaffoldMaker
- Scipy

## Usage

```
> python main.py --organ-scaffold <path/to/organ-scaffold.exf> --config <path/to/config> --sex <F/M> --rui <path/to/rui_locations.json> --block-id <Donor#> --output <path/to/output/dir>
```

## Background

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