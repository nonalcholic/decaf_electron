import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';
import { IBuildings, IActions } from './interfaces/actionsInterface';

const BUILD_RESTRAUNT = 'BUILD/RESTRAUNT';
const BUILD_DORMITORY = 'BUILD/DORMITORY';
const BUILD_CAFE = 'BUILD/CAFE';
const BUILD_LIBRARY = 'BUILD/LIBRARY';

export const buildRestraunt = (build: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: BUILD_RESTRAUNT, payload: build });
};

export const buildDormitory = (build: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: BUILD_DORMITORY, payload: build });
};

export const buildCafe = (build: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: BUILD_CAFE, payload: build });
};

export const buildLibrary = (build: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: BUILD_LIBRARY, payload: build });
};

const initialBuildings: IBuildings = {
  restaurant: false,
  dormintory: false,
  cafe: false,
  library: false,
};

const initialState: IActions = {
  buildings: initialBuildings,
};

export default handleActions<IActions, any>(
  {
    [BUILD_RESTRAUNT]: (state: IActions, action: any) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          restaurant: action.payload,
        },
      };
    },
    [BUILD_DORMITORY]: (state: IActions, action: any) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          dormintory: action.payload,
        },
      };
    },
    [BUILD_CAFE]: (state: IActions, action: any) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          cafe: action.payload,
        },
      };
    },
    [BUILD_LIBRARY]: (state: IActions, action: any) => {
      return {
        ...state,
        buildings: {
          ...state.buildings,
          library: action.payload,
        },
      };
    },
  },
  initialState
);
