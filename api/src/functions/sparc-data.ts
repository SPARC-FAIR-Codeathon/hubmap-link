import { get, random, uniq } from 'lodash';
import { ENTITY_CONTEXT, JsonDict, JsonLdObj, RUI_ORGANS } from './hubmap-data';
import { SPARC_ORGANS, DEFAULT_PLACEMENT, PlacementConfig } from './sparc-scaffolds';


export function sparcResponseAsJsonLd(data: unknown, debug = true): JsonLdObj {
  const entries = (get(data, 'hits.hits', []) as JsonDict[])
    .map(e => get(e, '_source', {}) as JsonDict);

  const donors = entries.map(e => new SparcTissueBlock(e).toJsonLd(debug));

  return { '@context': ENTITY_CONTEXT, '@graph': donors };
}

export class SparcTissueBlock {
  donor: JsonLdObj;
  sample: JsonLdObj;
  ruiLocation: JsonLdObj;
  datasets: JsonLdObj[];
  meta: Record<string, any>;

  '@id': string;
  creatorFirstName: string;
  creatorLastName: string;
  creator: string;
  dateCreated: string;
  scaffold: PlacementConfig;

  constructor(public data: JsonDict) {
    this['@id'] = data.item.curie.replace('DOI:', 'https://dx.doi.org/');
    this.creatorFirstName = get(data, 'pennsieve.owner.first.name');
    this.creatorLastName = get(data, 'pennsieve.owner.last.name');
    this.creator = `${get(data, 'pennsieve.owner.first.name')} ${get(data, 'pennsieve.owner.last.name')}`;
    this.dateCreated = data.dates.created.timestamp.split('T')[0];
    this.scaffold = get(data, 'anatomy.scaffold', [])
      .concat(get(data, 'anatomy.organ', []))
      .concat(get(data, 'anatomy.sampleSpecimenLocation', []))
      .map((d: Record<string,string>) => SPARC_ORGANS[d.curie] || SPARC_ORGANS[d.name])
      .filter((p: PlacementConfig) => !!p)      
      .concat(DEFAULT_PLACEMENT)[0];

    this.meta = this.getMetadata(data);
    this.donor = this.getDonor(data);
    this.sample = this.getSample(data);
    this.ruiLocation = this.getRuiLocation(data);
    this.datasets = this.getDatasets(data);
  }

  getMetadata(data: JsonDict): Record<string, any> {
    const organs: any[] = [
      ...get(data, 'anatomy.scaffold', []),
      ...get(data, 'anatomy.organ', [])
    ];

    const anatomicalStructures: any[] = [
      ...get(data, 'anatomy.scaffold', []),
      ...get(data, 'anatomy.organ', []),
      ...get(data, 'anatomy.sampleSpecimenLocation', [])
    ];

    data.extra = {
      organs, anatomicalStructures
    }

    return {
      name: get(data, 'item.name'),
      description: get(data, 'item.description'),
      anatomicalStructureId: uniq(anatomicalStructures.map(t => t.curie).filter(o => !!o)),
      anatomicalStructureName: uniq(anatomicalStructures.map(t => t.name?.toLowerCase()).filter(o => !!o)),
      dataType: get(data, 'item.types', []).map((t: any) => t.name).join(', ') || undefined,
      publicationStatus: get(data, 'item.published.status'),
      externalLink: this['@id'],
      groupName: get(data, 'pennsieve.organization.name'),
      consortium: 'SPARC'
    }
  }

  getDatasets(data: JsonDict): JsonLdObj[] {
    const technologies = [
      ...(data.item?.modalities ?? []),
      ...(data.item?.techniques ?? [])
    ].map(s => s.keyword).filter(s => !!s);

    const dateEntered = data.dates.created.timestamp.split('T')[0];
    const groupName = get(data, 'pennsieve.organization.name');
    const creator = `${get(data, 'pennsieve.owner.first.name')} ${get(data, 'pennsieve.owner.last.name')}`;

    return technologies.map((technology, index) =>({
      '@id': `${this['@id']}#Dataset${index+1}`,
      '@type': 'Dataset',
      label: `Registered ${dateEntered}, ${creator}, ${groupName}`,
      description: `Data/Assay Types: ${technologies.join(', ')}`,
      link: this['@id'],
      technology,
      thumbnail: 'assets/sparc/thumbnails/sparc_logo.jpg'
    }));
  }

  getSample(data: JsonDict): JsonLdObj {
    const dateEntered = data.dates.created.timestamp.split('T')[0];
    const groupName = get(data, 'pennsieve.organization.name');
    const creator = `${get(data, 'pennsieve.owner.first.name')} ${get(data, 'pennsieve.owner.last.name')}`;
    const specimenType = get(data, 'anatomy.specimenType[0].name');
    const sectionCount = get(data, 'item.statistics.samples.count', '0');
    const description = [specimenType, sectionCount + ' Samples'].filter(s => !!s).join(', ');
  
    return {
      '@type': 'Sample',
      sample_type: 'Tissue Block',
      rui_location: {},
      '@id': `${this['@id']}#Sample1`,
      link: this['@id'],
      label: `Registered ${dateEntered}, ${creator}, ${groupName}`,
      sections: [],
      datasets: [],
      section_count: parseInt(sectionCount, 10),
      sections_size: 0,
      section_units: 'millimeter',
      description
    };
  }

  getRuiLocation(data: JsonDict): JsonLdObj {
    const creator_first_name = get(data, 'pennsieve.owner.first.name');
    const creator_last_name = get(data, 'pennsieve.owner.last.name');
    const creator = `${get(data, 'pennsieve.owner.first.name')} ${get(data, 'pennsieve.owner.last.name')}`;

    const sexes = uniq<'male' | 'female'>(get(data, 'attributes.subject.sex', []).map((s: any) => s.value as string));
    const sex = sexes.length === 1 ? sexes[0] : (random(1,2) === 1 ? 'male' : 'female');
    const scaffold = this.scaffold;
    const placement = sex === 'male' ? scaffold.male_placement : scaffold.female_placement;

    const ontologyTerms = [RUI_ORGANS.body, RUI_ORGANS.skin];

    return {
      '@context': 'https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld',
      '@id': `${this['@id']}#SampleLocation`,
      '@type': 'SpatialEntity',
      ccf_annotations: ontologyTerms,
      creation_date: data.dates.created.timestamp,
      creator,
      creator_first_name,
      creator_last_name,
      dimension_units: 'millimeter',
      label: `SpatialEntity for `,
      placement: {
        '@context': 'https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld',
        '@id': `${this['@id']}#SampleLocationPlacement`,
        '@type': 'SpatialPlacement',
        target: `http://purl.org/ccf/latest/ccf.owl${placement.target}`,
        placement_date: data.dates.created.timestamp,
        x_rotation: random(0, 45), y_rotation: random(0, 45), z_rotation: random(0, 45), rotation_order: 'XYZ', rotation_units: 'degree',
        x_scaling: 1, y_scaling: 1, z_scaling: 1, scaling_units: 'ratio',
        x_translation: random(placement.bottom_left[0], placement.bottom_left[0] + placement.span),
        y_translation: placement.bottom_left[1],
        z_translation: placement.bottom_left[2],
        translation_units: 'millimeter'
      },
      x_dimension: 20,
      y_dimension: 20,
      z_dimension: 20
    }
  }

  getDonor(data: JsonDict): JsonLdObj {
    const organism = get(data, 'organisms.scaffold[0].species.name', get(data, 'organisms.subject[0].species.name'));
    const organ = get(data, 'anatomy.scaffold[0].name', get(data, 'anatomy.organ[0].name'));
    const sexes = uniq<'male' | 'female'>(get(data, 'attributes.subject.sex', []).map((s: any) => s.value as string));
    const sex = sexes.length === 1 ? sexes[0] : undefined;
    const ages = get(data, 'attributes.subject.ageCategory', []);
    const age = ages.length === 1 ? ages[0].value : undefined;

    const label = [organism, this.scaffold.name, sex, age].filter(s => !!s).join(', ');
    
    const dateEntered = (data.dates.updated?.timestamp ?? data.dates.created.timestamp).split('T')[0];
    const groupName = get(data, 'pennsieve.organization.name');
    const groupID = get(data, 'pennsieve.organization.identifier');
    const creator = `${get(data, 'pennsieve.owner.first.name')} ${get(data, 'pennsieve.owner.last.name')}`
  
    return {
      '@id': `${this['@id']}#Donor1`,
      '@type': 'Donor',
      label,
      description: `Entered ${dateEntered}, ${creator}, ${groupName}`,
      link: this['@id'],
      
      organism, organ,
      age,
      sex,

      consortium_name: 'SPARC',
      provider_name: groupName,
      provider_uuid: groupID,

      samples: []
    };
  }

  toJsonLd(debug = true): JsonLdObj {
    return {
      ...this.donor,
      samples: [{ ...this.sample,
        rui_location: this.ruiLocation,
        datasets: this.datasets,
        data: debug ? this.data : undefined,
        meta: debug ? this.meta : undefined
      }]
    };
  }
}
