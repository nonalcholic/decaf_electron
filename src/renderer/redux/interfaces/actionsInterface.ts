export interface IBuildings {
  restaurant: boolean | number;
  dormintory: boolean | number;
  cafe: boolean | number;
  library: boolean | number;
}

export interface IActions {
  buildings: IBuildings;
}
