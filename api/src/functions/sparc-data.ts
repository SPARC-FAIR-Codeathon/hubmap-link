import { get } from 'lodash';
import { ENTITY_CONTEXT, JsonDict, JsonLd, JsonLdObj } from './hubmap-data';


export function sparcResponseAsJsonLd(data: unknown, debug = true): JsonLd {
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

  '@id': string;

  constructor(public data: JsonDict) {
    this['@id'] = data.item.curie.replace('DOI:', 'https://dx.doi.org/');
    this.donor = this.getDonor(data);
    this.sample = this.getSample(data);
    this.ruiLocation = this.getRuiLocation(data);
    this.datasets = this.getDatasets(data);
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
    const sectionCount = get(data, 'item.statistics.samples.count', '0') + ' Samples';
    const description = [specimenType, sectionCount].filter(s => !!s).join(', ');
  
    return {
      '@type': 'Sample',
      sample_type: 'Tissue Block',
      rui_location: {},
      '@id': `${this['@id']}#Sample1`,
      link: this['@id'],
      label: `Registered ${dateEntered}, ${creator}, ${groupName}`,
      sections: [],
      datasets: [],
      section_count: sectionCount,
      sections_size: 0,
      section_units: 'millimeter',
      description
    };
  }

  getRuiLocation(data: JsonDict): JsonLdObj {
    const creator_first_name = get(data, 'pennsieve.owner.first.name');
    const creator_last_name = get(data, 'pennsieve.owner.last.name');
    const creator = `${get(data, 'pennsieve.owner.first.name')} ${get(data, 'pennsieve.owner.last.name')}`;

    return {
      '@context': 'https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld',
      '@id': `${this['@id']}#SampleLocation`,
      '@type': 'SpatialEntity',
      ccf_annotations: [],
      creation_date: data.dates.created.timestamp,
      creator,
      creator_first_name,
      creator_last_name,
      dimension_units: 'millimeter',
      label: `SpatialEntity for `,
      placement: {
        '@context': 'https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld',
        '@id': `${this['@id']}#SampleLocationPlacement`,
        '@type': 'SpatialEntity',
        target: 'http://purl.org/ccf/latest/ccf.owl#VHXXX',
        creation_date: data.dates.created.timestamp,
        x_rotation: 0, y_rotation: 0, z_rotation: 0, rotation_order: 'XYZ', rotation_units: 'degree',
        x_scaling: 1, y_scaling: 1, z_scaling: 1, scaling_units: 'ratio',
        x_translation: 0, y_translation: 0, z_translation: 0, translation_units: 'millimeter'
      },
      x_dimension: 10,
      y_dimension: 10,
      z_dimension: 10
    }
  }

  getDonor(data: JsonDict): JsonLdObj {
    const organism = get(data, 'organisms.scaffold[0].species.name', get(data, 'organisms.subject[0].species.name'));
    const organ = get(data, 'anatomy.scaffold[0].name', get(data, 'anatomy.organ[0].name'));
    const sexes = get(data, 'attributes.subject.sex', []);
    const sex = sexes.length === 1 ? sexes[0].value : undefined;
    const ages = get(data, 'attributes.subject.ageCategory', []);
    const age = ages.length === 1 ? ages[0].value : undefined;

    const label = [organism, organ, sex, age].filter(s => !!s).join(', ');
    
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
        datasets: this.datasets
      }],
      data: debug ? this.data : undefined
    };
  }
}
