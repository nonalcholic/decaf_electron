import { createSlice } from '@reduxjs/toolkit';
import { Sex } from '../objects/Person';
import { Student } from '../objects/Student';
import { binaryRandom, normalRandom } from '../utils';
import { FacilityAction, GameAction, IAction, SeasonAction } from './actions';
import { IStudent } from './interfaces/studentInterface';
import { IReducers } from './reducers';

const initialState: IStudent = {
  studentList: [],
};

const studentSlice = createSlice<IStudent, IReducers<IStudent>>({
  name: 'student',
  initialState,
  reducers: {
    initialize: (state: IStudent, action: IAction) => {
      const studentList: Student[] = Array(action.payload as number).fill({
        age: 20,
        sex: binaryRandom() as Sex,
        intelligence: normalRandom(0, 10),
        personality: normalRandom(0, 10),
        charm: normalRandom(0, 10),
        willingness: normalRandom(0, 10),
      });
      return {
        ...state,
        studentList,
      };
    },
    execute: (state: IStudent, action: IAction) => {
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
