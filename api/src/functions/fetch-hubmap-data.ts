import { fetchHuBMAPElasticSearch } from './fetch-elastic-search';
import { hubmapResponseAsJsonLd } from './hubmap-data';


export async function fetchHuBMAPData(debug = true): Promise<any> {
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
    post_filter: debug ? { term: { 'entity_type.keyword': 'Sample' } } : undefined,
    query: !debug ? { exists: { field: 'rui_location' } } : undefined
  }, 10000);
  return hubmapResponseAsJsonLd(esData, 'https://assets.hubmapconsortium.org', 'https://portal.hubmapconsortium.org/', undefined, debug);
}
