import { createSlice } from '@reduxjs/toolkit';
import { DefaultAction, GameAction, IAction } from './actions';
import { IUniversity } from './interfaces/universityInterface';
import { IReducers } from './reducers';

const initialState: IUniversity = {
  weeks: 0,
  reputation: 0,
};

const universitySlice = createSlice<IUniversity, IReducers<IUniversity>>({
  name: 'university',
  initialState,
  reducers: {
    initialize: () => {
      return { ...initialState };
    },
    execute: (state: IUniversity, action: IAction) => {
      const gameAction = action.payload as GameAction;
      switch (gameAction) {
        // Default
        case DefaultAction.Weeks:
          return {
            ...state,
            weeks: state.weeks + 1,
          };
        default:
          return state;
      }
    },
  },
});

export const universityActions = universitySlice.actions;
export default universitySlice.reducer;
