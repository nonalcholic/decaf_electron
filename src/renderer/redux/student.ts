import { createSlice } from '@reduxjs/toolkit';
import { IStudent, StudentMangager } from 'renderer/objects/Student';
import { FacilityAction, GameAction, IAction, SeasonAction } from './actions';
import { StudentRedux } from './interfaces/studentInterface';
import { IReducers } from './reducers';

const initialState: StudentRedux = {
  studentList: [],
};

const studentSlice = createSlice<StudentRedux, IReducers<StudentRedux>>({
  name: 'student',
  initialState,
  reducers: {
    initialize: (state: StudentRedux, action: IAction) => {
      // FIXME: Student, IStudent, Person... 정리하기
      const studentList: IStudent[] = [
        StudentMangager.create(),
        StudentMangager.create(),
        StudentMangager.create(),
        StudentMangager.create(),
        StudentMangager.create(),
      ];
      return {
        ...state,
        studentList,
      };
    },
    execute: (state: StudentRedux, action: IAction) => {
      const gameAction = action.payload as GameAction;
      switch (gameAction) {
        // Season
        case SeasonAction.Festival:
          return {
            ...state,
            studentList: state.studentList.map((student) => {
              return { ...student, age: student.age - 1 };
            }),
          };
        case SeasonAction.Midterm:
          return {
            ...state,
            studentList: state.studentList.map((student) => {
              return { ...student, age: student.age + 1 };
            }),
          };

        // Facility
        case FacilityAction.Cafe:
          return {
            ...state,
            studentList: state.studentList.map((student) => {
              return { ...student, willingness: student.willingness + 1 };
            }),
          };
        case FacilityAction.Library:
          return {
            ...state,
            studentList: state.studentList.map((student) => {
              return { ...student, intelligence: student.intelligence + 1 };
            }),
          };
        default:
          return state;
      }
    },
  },
});

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
