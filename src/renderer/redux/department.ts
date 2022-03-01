import { createSlice } from '@reduxjs/toolkit';
import { IAction } from './actions';
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
      // return;
    },
  },
});

export const departmentActions = departmentSlice.actions;
export default departmentSlice.reducer;
