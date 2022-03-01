export interface IAction {
  payload: GameAction | number | null;
  type: string;
}

export type GameAction = DefaultAction | UserAction;

export type UserAction = FacilityAction | PolicyAction | SeasonAction;

export enum DefaultAction {
  Weeks = 0, // 시간의 흐름
}

export enum FacilityAction {
  Cafe = 1000, // 카페 건설
  Library, // 도서관 건설
}

export enum PolicyAction {
  Capacity = 2000, // 입학 정원 변경
}

export enum SeasonAction {
  Festival = 3000, // 축제 기간
  Midterm, // 중간고사 기간
}
