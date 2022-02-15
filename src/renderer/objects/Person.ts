export enum Sex {
  male = 0,
  female = 1,
}

export interface IPerson {
  age: number;

  readonly sex: Sex;

  readonly intelligence: number;

  readonly personality: number;

  readonly charm: number;

  readonly willingness: number;
}

export abstract class Person {
  protected _age: number;

  protected readonly _sex: Sex;

  protected readonly _intelligence: number;

  protected readonly _personality: number;

  protected readonly _charm: number;

  protected readonly _willingness: number;

  constructor({
    age,
    sex,
    intelligence,
    personality,
    charm,
    willingness,
  }: IPerson) {
    this._age = age;
    this._sex = sex;
    this._intelligence = intelligence;
    this._personality = personality;
    this._charm = charm;
    this._willingness = willingness;
  }

  get age(): number {
    return this._age;
  }

  get sex(): number {
    return this._sex;
  }

  get intelligence(): number {
    return this._intelligence;
  }

  get personality(): number {
    return this._personality;
  }

  get charm(): number {
    return this._charm;
  }

  get willingness(): number {
    return this._willingness;
  }
}
