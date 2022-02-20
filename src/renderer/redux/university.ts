import { createSlice } from '@reduxjs/toolkit';
import { IUniversity } from './interfaces/universityInterface';

const initialState: IUniversity = {
  weeks: 0,
  reputation: 0,
};

const universitySlice = createSlice({
  name: 'university',
  initialState,
  reducers: {
    init: () => {
      return { ...initialState };
    },
  },
});

export const universityActions = universitySlice.actions;
export default universitySlice.reducer;
