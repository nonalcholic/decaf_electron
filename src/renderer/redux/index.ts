import { combineReducers } from 'redux';
import { StudentRedux } from './interfaces/studentInterface';
import { UniversityRedux } from './interfaces/universityInterface';
import student from './student';
import university from './university';

export interface IReducer {
  student: StudentRedux;
  university: UniversityRedux;
}

const rootReducer = combineReducers<IReducer>({
  student,
  university,
});

export default rootReducer;
