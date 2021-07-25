export interface CellType {
    id:string;
    name:string;
    label:string;
    //True if this organ is present in the sparc tree
    sparcResident:boolean;
    //True if this organ is present in the hubmap tree
    hubmapResident:boolean;
}
