export interface IAction {
  payload: GameAction | number | null;
  type: string;
}

export type GameAction =
  | DefaultAction
  | FacilityAction
  | PolicyAction
  | SeasonAction;

export enum DefaultAction {
  Weeks = 0, // 시간의 흐름
}

export enum FacilityAction {
  Cafe = 1, // 카페 건설
  Library, // 도서관 건설
}

export enum PolicyAction {
  Capacity = 2, // 입학 정원 변경
}

export enum SeasonAction {
  Festival = 3, // 축제 기간
  Midterm, // 중간고사 기간
}
