import { get } from 'lodash';
import { ENTITY_CONTEXT, JsonDict, JsonLd, JsonLdObj } from './hubmap-data';


export function sparcResponseAsJsonLd(data: unknown): JsonLd {
  const entries = (get(data, 'hits.hits', []) as JsonDict[])
    .map(e => get(e, '_source', {}) as JsonDict);

  const donors = entries.map(e => new SparcTissueBlock(e).toJsonLd());

  return { '@context': ENTITY_CONTEXT, '@graph': donors };
}

export class SparcTissueBlock {
  donor: JsonLdObj;
  sample: JsonLdObj;

  '@id': string;

  constructor(public data: JsonDict) {
    this['@id'] = data.item.curie.replace('DOI:', 'https://dx.doi.org/');
    this.donor = this.getDonor(data);
    this.sample = this.getSample(data);
  }

  getSample(data: JsonDict): JsonLdObj {
    const dateEntered = data.dates.created.timestamp.split('T')[0];
    const groupName = get(data, 'pennsieve.organization.name');
    const creator = `${get(data, 'pennsieve.owner.first.name')} ${get(data, 'pennsieve.owner.last.name')}`
  
    return {
      '@id': `${this['@id']}#Sample1`,
      '@type': 'Sample',
      label: `Registered ${dateEntered}, ${creator}, ${groupName}`,
      description: '',
      link: this['@id'],

      sample_type: 'Tissue Block',
    };
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

  toJsonLd(): JsonLdObj {
    return { ...this.donor, samples: [this.sample], data: this.data };
  }
}
