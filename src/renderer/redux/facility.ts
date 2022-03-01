import { createSlice } from '@reduxjs/toolkit';
import { IAction } from './actions';
import { FacilityRedux } from './interfaces/facilityInterface';
import { IReducers } from './reducers';

const initialState: FacilityRedux = {
  buildingList: [],
};

const facilitySlice = createSlice<FacilityRedux, IReducers<FacilityRedux>>({
  name: 'facility',
  initialState,
  reducers: {
    initialize: () => {
      return { ...initialState };
    },
    execute: (state: FacilityRedux, action: IAction) => {
      // return;
    },
  },
});

export const facilityActions = facilitySlice.actions;
export default facilitySlice.reducer;
