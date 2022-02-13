import { combineReducers } from 'redux';
import { IGame } from './interfaces/gameInterface';
import { IStudent } from './interfaces/studentInterface';
import { IUniversity } from './interfaces/universityInterface';
import { IActions } from './interfaces/actionsInterface';
import students from './students';
import game from './game';
import university from './university';
import actions from './actions';

export interface IReducer {
  students: IStudent;
  game: IGame;
  university: IUniversity;
  actions: IActions;
}

const rootReducer = combineReducers<IReducer>({
  students,
  game,
  university,
  actions,
});

export default rootReducer;
