export enum Sex {
  male = 0,
  female = 1,
}

export interface IPerson {
  age: number;
  sex: Sex;
  intelligence: number;
  personality: number;
  charm: number;

  willingness: number;
  healthy: number;
  happiness: number;
}
