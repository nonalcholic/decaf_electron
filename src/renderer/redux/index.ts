import { combineReducers } from 'redux';
import { IGame } from './interfaces/gameInterface';
import { IStudent } from './interfaces/studentInterface';
import { IUniversity } from './interfaces/universityInterface';
import student from './student';
import game from './game';
import university from './university';

export interface IReducer {
  student: IStudent;
  game: IGame;
  university: IUniversity;
}

const rootReducer = combineReducers<IReducer>({
  student,
  game,
  university,
});

export default rootReducer;
