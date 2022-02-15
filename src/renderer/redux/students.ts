import { createSlice } from '@reduxjs/toolkit';
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
      return {
        ...state,
        studentList: [action.payload],
      };
    },
  },
});

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
