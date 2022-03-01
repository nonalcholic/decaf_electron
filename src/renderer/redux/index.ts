import { combineReducers } from 'redux';
import department from './department';
import facility from './facility';
import { DepartmentRedux } from './interfaces/departmentInterface';
import { FacilityRedux } from './interfaces/facilityInterface';
import { StudentRedux } from './interfaces/studentInterface';
import { UniversityRedux } from './interfaces/universityInterface';
import student from './student';
import university from './university';

export interface IReducer {
  student: StudentRedux;
  university: UniversityRedux;
  facility: FacilityRedux;
  department: DepartmentRedux;
}

const rootReducer = combineReducers<IReducer>({
  student,
  university,
  facility,
  department,
});

export default rootReducer;
