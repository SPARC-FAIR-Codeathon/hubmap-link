<!-- markdownlint-disable MD013 -->

# Visualizing Sample and Ontology linkages between HuBMAP and SPARC

## Original Project Proposal

We propose to visualize and report on the linkages between HuBMAP and SPARC. We will 1) look at the anatomical structures ontologically tagged by SPARC and find how they connect to the HuBMAP CCF / ASCT+B ontology terms 2) find how those common terms map to the 3D HuBMAP VHCCF reference system 3) map samples from SPARC to HuBMAP 4) visualize the term overlaps 5) and visualize the samples both from HuBMAP and SPARC in the same 3D reference system (CCF).

This study of the interlinkages between HuBMAP and SPARC ontologies and data could be very valuable in longitudinal studies and to further the goals of both HuBMAP and SPARC in cross-consortium interoperability.

## Goals

1. Catalog and visualize ontology overlaps between HuBMAP and SPARC's reference and sample data
    - Find ontology terms (primarily anatomical structures) that exist in both HuBMAP and SPARC data
    - Visualize the term overlaps
    - Find and Visualize how those terms map into the HuBMAP CCF (3D VHCCF and ASCT+B)
1. Map and Visualize sample data in HuBMAP and SPARC 3D reference systems
    - Find 'mappable' tissue samples from SPARC and HuBMAP
    - Map tissue samples from SPARC into HuBMAP CCF and vice versa
    - Visualize tissue samples in the same 3D reference system(s)

## Resources

- Codeathon Page: <https://sparc.science/help/2021-sparc-fair-codeathon>
- Biomedical Ontologies
  - Uberon: <http://uberon.org/> ([BioPortal](https://bioportal.bioontology.org/ontologies/UBERON))
  - Cell Ontology: <http://obofoundry.org/ontology/cl.html> ([BioPortal](https://bioportal.bioontology.org/ontologies/CL))
  - FMA: <http://sig.biostr.washington.edu/projects/fm/AboutFM.html> ([BioPortal](https://bioportal.bioontology.org/ontologies/FMA))
  - HGNC: <https://www.genenames.org/> ([BioPortal](https://bioportal.bioontology.org/ontologies/HGNC))
  - HuBMAP CCF Ontology: <https://hubmapconsortium.github.io/ccf/> ([BioPortal](https://bioportal.bioontology.org/ontologies/CCF))
    - Tecnical Documentation: <https://docs.google.com/document/d/1aS0Xe5uhajnNY0VsuXtHvAUVH5mnd1otheCvEzIv28s/edit#>
    - On Web Protege: <https://webprotege.stanford.edu/#projects/7346d521-0274-45e1-8e86-05f206b9e543/edit/Classes>
    - Direct Download: <https://purl.org/ccf/latest/ccf.owl>
- Interchange Formats
  - CCF RUI Location JSON-LD Format: Documentation ([example](https://github.com/hubmapconsortium/ccf-ui/blob/66907f18052b2c9c86e7d6e7477ceba031b9b470/projects/ccf-eui/src/assets/sparc/data/rui_locations.jsonld#L58-L99))
  - CCF EUI Donor / Tissue Registration JSON-LD Format: Documentation ([example](https://github.com/hubmapconsortium/ccf-ui/blob/main/projects/ccf-eui/src/assets/sparc/data/rui_locations.jsonld))
- HuBMAP
  - CCF Portal: <https://hubmapconsortium.github.io/ccf/>
  - CCF Release v1.0: <https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/>
  - 3D Human Body (Female): <https://ccf-ontology.hubmapconsortium.org/objects/v1.0/VH_F_United.glb> ([viewer](https://sandbox.babylonjs.com/?assetUrl=https://ccf-ontology.hubmapconsortium.org/objects/v1.0/VH_F_United.glb))
  - 3D Human Body (Male): <https://ccf-ontology.hubmapconsortium.org/objects/v1.0/VH_M_United.glb> ([viewer](https://sandbox.babylonjs.com/?assetUrl=https://ccf-ontology.hubmapconsortium.org/objects/v1.0/VH_M_United.glb))
  - CCF ASCT+B (Anatomical Structures, Cell Types, and Biomarkers) Reporter: <https://hubmapconsortium.github.io/ccf-asct-reporter/>
  - CCF RUI (Registration User Interface): <https://hubmapconsortium.github.io/ccf-ui/rui/>
  - CCF EUI (Exploration User Interface): <https://portal.hubmapconsortium.org/ccf-eui>
  - GitHub Org: <https://github.com/hubmapconsortium>
- SPARC
  - Maps: <https://sparc.science/maps>
  - 3D Human Body: <https://sparc.science/datasets/156> ([Viewer](https://mapcore-demo.org/current/scaffoldvuer/#/?url=https%3A%2F%2Fmapcore-bucket1.s3-us-west-2.amazonaws.com%2FWholeBody%2F31-May-2021%2FhumanBody%2FhumanBody_metadata.json))
