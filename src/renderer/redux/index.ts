import { combineReducers } from 'redux';
import { IStudent } from './interfaces/studentInterface';
import { IUniversity } from './interfaces/universityInterface';
import student from './student';
import university from './university';

export interface IReducer {
  student: IStudent;
  university: IUniversity;
}

const rootReducer = combineReducers<IReducer>({
  student,
  university,
});

export default rootReducer;
