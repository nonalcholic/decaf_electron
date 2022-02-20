import { createSlice } from '@reduxjs/toolkit';
import { Student } from 'renderer/objects/Student';
import { IStudent } from './interfaces/studentInterface';

const initialState: IStudent = {
  studentList: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    //@ts-ignore
    initStudentList: (state: IStudent, action: any) => {
      const studnetList: Student[] = action.payload;
      return {
        ...state,
        studentList: studnetList,
      };
    },
  },
});

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
