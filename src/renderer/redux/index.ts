import { combineReducers } from 'redux';
import { IStudent } from './interfaces/studentInterface';
import students from './students';

export interface IReducer {
  students: IStudent;
}

const rootReducer = combineReducers<IReducer>({
  students,
});

export default rootReducer;
