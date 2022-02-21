import { CaseReducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { IAction } from './actions';

export interface IReducers<State> extends SliceCaseReducers<State> {
  initialize: CaseReducer<State, IAction>;
  execute: CaseReducer<State, IAction>;
}
