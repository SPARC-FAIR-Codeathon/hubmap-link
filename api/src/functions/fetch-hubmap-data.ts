import { fetchHuBMAPElasticSearch } from './fetch-elastic-search';
import { hubmapResponseAsJsonLd } from './hubmap-data';


export async function fetchHuBMAPData(): Promise<any> {
  const esData = await fetchHuBMAPElasticSearch({
    _source: {
      excludes: [
        'donor', 'immediate_ancestors', 'immediate_descendants', 'origin_sample',
        'portal_metadata_upload_files', 'portal_uploaded_image_files', 'ancestor_ids', 'descendant_ids'
      ]
    },
    stored_fields: ['*'],
    script_fields: {},
    docvalue_fields: [],
    post_filter: { term: { 'entity_type.keyword': 'Sample' } }
  }, 10000);
  return hubmapResponseAsJsonLd(esData, 'https://assets.hubmapconsortium.org', 'https://portal.hubmapconsortium.org/');
}
