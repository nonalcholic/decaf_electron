import { createSlice } from '@reduxjs/toolkit';
import { DepartmentAction, IAction } from './actions';
import { DepartmentRedux } from './interfaces/departmentInterface';
import { IReducers } from './reducers';

const initialState: DepartmentRedux = {
  departmentList: [],
};

const departmentSlice = createSlice<
  DepartmentRedux,
  IReducers<DepartmentRedux>
>({
  name: 'department',
  initialState,
  reducers: {
    initialize: () => {
      return { ...initialState };
    },
    execute: (state: DepartmentRedux, action: IAction) => {
      const gameAction = action.payload.type as DepartmentAction;
      switch (gameAction) {
        case DepartmentAction.Create:
          return {
            ...state,
            departmentList: [...state.departmentList, action.payload.body],
          };
        default:
          return { ...state };
      }
    },
  },
});

export const departmentActions = departmentSlice.actions;
export default departmentSlice.reducer;
