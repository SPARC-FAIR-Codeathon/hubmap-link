import { fetchHuBMAPElasticSearch } from './fetch-elastic-search';
import { hubmapResponseAsJsonLd } from './hubmap-data';


export async function fetchHuBMAPData(format: string, token?: string): Promise<any> {
  const debug = format && format.includes('debug');
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
  }, 10000, token);
  switch (format) {
    case 'json-metadata':
    case 'json-metadata-debug':
      const data = hubmapResponseAsJsonLd(esData, 'https://assets.hubmapconsortium.org', 'https://portal.hubmapconsortium.org/', undefined, true);
      const metadata: any[] = [];
      (data['@graph'] as any[]).forEach(row => row.samples.filter((s: any) => !!s.meta).forEach((s: any) => metadata.push(s.meta)));
      return metadata;
    case 'jsonld':
    case 'jsonld-debug':
      return hubmapResponseAsJsonLd(esData, 'https://assets.hubmapconsortium.org', 'https://portal.hubmapconsortium.org/', undefined, debug);
    default:
      return esData;
  }
}
