export interface Zone {
  complianceLevel: number;
  guid: string;
  name: string;
}

export interface Section {
  complianceLevel: number;
  destinationGuid: string;
  hasErrors: boolean;
  hasMultipleSections: boolean;
  hasUncomputedResults: boolean;
  sectionId: number;
  sourceGuid: string;
  violationsCount: number;
}
