export interface Organ {
    id:string;
    name:string;
    label:string;

    //The maximum depth at which this node appears (excluding cyclical references)
    maxDepth:number;

    //True if this organ is present in the sparc tree
    sparcResident:boolean;
    //True if this organ is present in the hubmap tree
    hubmapResident:boolean;

    //All organs with a parent relationship on this organ
    asParents: Set<Organ>;

    //All child organs, including duplicate parent-child relationships
    asAllChildren: Set<Organ>;
    //Acyclical child organs; each organ appears as a child of one parent with the greatest max depth
    asAcyclicalChildren: Set<Organ>;

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
