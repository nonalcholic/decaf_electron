import { createSlice } from '@reduxjs/toolkit';
import { IStudent } from './interfaces/studentInterface';

const initialState: IStudent = {
  studentList: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    init: () => {
      return { ...initialState };
    },
  },
});

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
