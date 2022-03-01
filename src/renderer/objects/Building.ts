import IFacility from './Facility';

export enum FacilityType {
  Dormitory = 1,
  Restaurant,
  Cafe,
  Library,
}

export interface IBuilding extends IFacility {
  type: FacilityType;
  capacity: number;
  level: number;
}
