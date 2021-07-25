export interface Placement {
  target: string;
  bottom_left: number[];
  span: number;
}

export interface PlacementConfig {
  name: string;
  male_placement: Placement;
  female_placement: Placement;
}

export const DEFAULT_PLACEMENT: PlacementConfig = {
  name: 'default',
  male_placement: {
    target: '#VHMSkin', bottom_left: [981, 766, 396], span: 200
  },
  female_placement: {
    target: '#VHFSkin', bottom_left: [992, 718, 396], span: 200
  }
}

export const SPARC_ORGANS: Record<string, PlacementConfig> = {
  'UBERON:0000945': {
    name: 'stomach',
    male_placement: {
      target: '#VHMSkin', bottom_left: [614, 1167, 222], span: 90
    },
    female_placement: {
      target: '#VHFSkin', bottom_left: [491, 1114, 175], span: 90
    }
  },
  'UBERON:0001155': {
    name: 'colon',
    male_placement: {
      target: '#VHMSkin', bottom_left: [400, 1054, 188], span: 150
    },
    female_placement: {
      target: '#VHFSkin', bottom_left: [422, 984, 165], span: 150
    }
  },
  'UBERON:0001264': {
    name: 'pancreas',
    male_placement: {
      target: '#VHMSkin', bottom_left: [533, 1157, 251], span: 100
    },
    female_placement: {
      target: '#VHFSkin', bottom_left: [550, 1042, 261], span: 100
    }
  },
  'UBERON:0001759': {
    name: 'vagus nerve',
    male_placement: {
      target: '#VHMSkin', bottom_left: [424, 1526, 145], span: 150
    },
    female_placement: {
      target: '#VHFSkin', bottom_left: [426, 1467, 165], span: 150
    }
  }
};

Object.values(SPARC_ORGANS).forEach(p => SPARC_ORGANS[p.name] = p);
SPARC_ORGANS['descending colon'] = SPARC_ORGANS['colon'];
SPARC_ORGANS['sigmoid colon'] = SPARC_ORGANS['colon'];
