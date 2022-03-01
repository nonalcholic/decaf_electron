import { combineReducers } from 'redux';
import facility from './facility';
import { FacilityRedux } from './interfaces/facilityInterface';
import { StudentRedux } from './interfaces/studentInterface';
import { UniversityRedux } from './interfaces/universityInterface';
import student from './student';
import university from './university';

export interface IReducer {
  student: StudentRedux;
  university: UniversityRedux;
  facility: FacilityRedux;
}

const rootReducer = combineReducers<IReducer>({
  student,
  university,
  facility,
});

export default rootReducer;
