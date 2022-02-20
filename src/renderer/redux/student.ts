import { createSlice } from '@reduxjs/toolkit';
import { GameAction } from 'renderer/manager/GameManager';
import { Student } from 'renderer/objects/Student';
import { IStudent } from './interfaces/studentInterface';

const initialState: IStudent = {
  studentList: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    initStudentList: (state: IStudent, action: any) => {
      const studentList: Student[] = action.payload;
      return {
        ...state,
        studentList: studentList,
      };
    },
    doEvent: (state: IStudent, action: any) => {
      const gameAction: GameAction = action.payload;

      switch (gameAction) {
        case GameAction.Festival:
          return {
            ...state,
            studentList: state.studentList.map((student) => {
              return { ...student, age: student.age - 1 };
            }),
          };
        case GameAction.Midterm:
          return {
            ...state,
            studentList: state.studentList.map((student) => {
              return { ...student, age: student.age + 1 };
            }),
          };
      }
    },
  },
});

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
