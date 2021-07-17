export interface Organ {
    id:string;
    name:string;
    label:string;

    //True if this organ is present in the sparc tree
    sparcResident:boolean;
    //True if this organ is present in the hubmap tree
    hubmapResident:boolean;

    //Organs with a PART_OF relationship on this organ in Sparc only
    asSparcChildren: Set<Organ>;
    //Organs with a PART_OF relationship on this organ in Hubmap only
    asHubmapChildren: Set<Organ>;
    //Organs with a PART_OF relationship on this organ in Sparc and Hubmap
    asSharedChildren: Set<Organ>;

    //CellTypes with a PART_OF relationship on this organ in Sparc only
    ctSparcChildren: Set<string>;
    //CellTypes with a PART_OF relationship on this organ in Hubmap only
    ctHubmapChildren: Set<string>;
    //CellTypes with a PART_OF relationship on this organ in Sparc and Hubmap
    ctSharedChildren: Set<string>;
}
