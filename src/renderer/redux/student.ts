import { createSlice } from '@reduxjs/toolkit';
import { IStudent, StudentMangager } from 'renderer/objects/Student';
import {
  FacilityAction,
  GameAction,
  IAction,
  SeasonAction,
  StudentAction,
} from './actions';
import { StudentRedux } from './interfaces/studentInterface';
import { IReducers } from './reducers';

const initialState: StudentRedux = {
  studentList: [],
};

const studentSlice = createSlice<StudentRedux, IReducers<StudentRedux>>({
  name: 'student',
  initialState,
  reducers: {
    initialize: () => {
      return { ...initialState };
    },
    execute: (state: StudentRedux, action: IAction) => {
      const gameAction = action.payload.type as GameAction;
      switch (gameAction) {
        case StudentAction.Create:
          return {
            ...state,
            studentList: [...state.studentList, ...action.payload.body],
          };
        default:
          return state;
      }
    },
  },
});

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
