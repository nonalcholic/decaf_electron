import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';
import { IBuildings } from './interfaces/actionsInterface';
import { IUniversity } from './interfaces/universityInterface';

const WEEKS_ADD = 'WEEKS/ADD';
const BUILDINGS_ADD_RESTRAUNT = 'BUILDINGS/ADD/RESTRAUNT';
const BUILDINGS_ADD_DORMITORY = 'BUILDINGS/ADD/DORMITORY';
const BUILDINGS_ADD_CAFE = 'BUILDINGS/ADD/CAFE';
const BUILDINGS_ADD_LIBRARY = 'BUILDINGS/ADD/LIBRARY';

export const addWeeks = () => (dispatch: Dispatch) => {
  dispatch({ type: WEEKS_ADD });
};

export const addRestraunt = () => (dispatch: Dispatch) => {
  dispatch({ type: BUILDINGS_ADD_RESTRAUNT });
};

export const addDormitory = () => (dispatch: Dispatch) => {
  dispatch({ type: BUILDINGS_ADD_DORMITORY });
};

export const addCafe = () => (dispatch: Dispatch) => {
  dispatch({ type: BUILDINGS_ADD_CAFE });
};

export const addLibrary = () => (dispatch: Dispatch) => {
  dispatch({ type: BUILDINGS_ADD_LIBRARY });
};

const initialBuildings: IBuildings = {
  restaurant: 0,
  dormintory: 0,
  cafe: 0,
  library: 0,
};

const initialState: IUniversity = {
  weeks: 0,
  buildings: initialBuildings,
};

export default handleActions<IUniversity, any>(
  {
    [WEEKS_ADD]: (state: IUniversity) => {
      return {
        ...state,
        weeks: state.weeks + 1,
      };
    },
    [BUILDINGS_ADD_RESTRAUNT]: (state: IUniversity) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          restaurant: (state.buildings.restaurant as number) + 1,
        },
      };
    },
    [BUILDINGS_ADD_DORMITORY]: (state: IUniversity) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          dormintory: (state.buildings.dormintory as number) + 1,
        },
      };
    },
    [BUILDINGS_ADD_CAFE]: (state: IUniversity) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          cafe: (state.buildings.cafe as number) + 1,
        },
      };
    },
    [BUILDINGS_ADD_LIBRARY]: (state: IUniversity) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          library: (state.buildings.library as number) + 1,
        },
      };
    },
  },
  initialState
);
