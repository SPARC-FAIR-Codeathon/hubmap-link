rui_template = {
    "@context": {
        "@base": "http://purl.org/ccf/latest/ccf-entity.owl#",
        "@vocab": "http://purl.org/ccf/latest/ccf-entity.owl#",
        "ccf": "http://purl.org/ccf/latest/ccf.owl#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "label": "rdfs:label",
        "description": "rdfs:comment",
        "link": {
            "@id": "rdfs:seeAlso",
            "@type": "@id"
        },
        "samples": {
            "@reverse": "has_donor"
        },
        "sections": {
            "@id": "has_tissue_section",
            "@type": "@id"
        },
        "datasets": {
            "@id": "has_dataset",
            "@type": "@id"
        },
        "rui_location": {
            "@id": "has_spatial_entity",
            "@type": "@id"
        },
        "ontologyTerms": {
            "@id": "has_ontology_term",
            "@type": "@id"
        },
        "cellTypeTerms": {
            "@id": "has_cell_type_term",
            "@type": "@id"
        },
        "thumbnail": {
            "@id": "has_thumbnail"
        }
    },
    "@graph": [
        {
            "@id": "",
            "@type": "Donor",
            "label": "",
            "description": "",
            "d": "Exemplary tissue registration",
            "consortium_name": "SPARC",
            "provider_name": "SPARC",
            "provider_uuid": "",
            "samples": [
                {
                    "@id": "",
                    "@type": "Sample",
                    "label": "",
                    "description": "",
                    "sample_type": "Tissue Block",
                    "section_count": 1,
                    "section_size": 10,
                    "section_units": "millimeter",
                    "rui_location": {
                        "@context": "https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld",
                        "@id": "",
                        "@type": "SpatialEntity",
                        "creator": "",
                        "creator_first_name": "",
                        "creator_last_name": "",
                        "creation_date": "",
                        "ccf_annotations": [],
                        "x_dimension": 0,
                        "y_dimension": 0,
                        "z_dimension": 0,
                        "dimension_units": "millimeter",
                        "placement": {
                            "@context": "https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld",
                            "@id": "",
                            "@type": "SpatialPlacement",
                            "target": "",
                            "placement_date": "",
                            "x_scaling": 1,
                            "y_scaling": 1,
                            "z_scaling": 1,
                            "scaling_units": "ratio",
                            "x_rotation": 0,
                            "y_rotation": 0,
                            "z_rotation": 0,
                            "rotation_order": "XYZ",
                            "rotation_units": "degree",
                            "x_translation": 0,
                            "y_translation": 0,
                            "z_translation": 0,
                            "translation_units": "millimeter"
                        }
                    },
                    "datasets": [
                        {
                            "@id": "",
                            "@type": "Dataset",
                            "label": "",
                            "description": "Exemplary tissue registration",
                            "technology": "OTHER",
                            "thumbnail": "assets/sparc/thumbnails/sparc_logo.jpg"
                        }
                    ]
                }
            ]
        }
    ]
}
