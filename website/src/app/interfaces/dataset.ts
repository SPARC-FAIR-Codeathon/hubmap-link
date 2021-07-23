export interface Dataset {
    name:string;
    description: string;
    anatomicalStructureId: string[];
    anatomicalStructureName: string[];
    dataType: string[];
    publicationStatus: boolean;
    externalLink: string;
    groupName: string;
    consortium: string;
}
