import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';
import { normalRandom, binaryRandom } from '../utils/random';
import { IStudent } from './interfaces/studentInterface';

const UPDATE_KNOWLEDGE = 'UPDATE/KNOWLEDGE';
const UPDATE_HAPPINESS = 'UPDATE/HAPPINESS';

export const updateKnowledge = (value: number) => (dispatch: Dispatch) => {
  dispatch({ type: UPDATE_KNOWLEDGE, payload: value });
};

export const updateHappiness = (value: number) => (dispatch: Dispatch) => {
  dispatch({ type: UPDATE_HAPPINESS, payload: value });
};

const initialState: IStudent = {
  intelligence: normalRandom(), // 지성
  personality: normalRandom(), // 인성
  charm: normalRandom(), // 매력
  willingness: normalRandom(), // 의지
  luck: normalRandom(), // 운 ()
  sex: binaryRandom(), // 성별 (0: male, 1: female)
  knowledge: normalRandom(), // 지식
  happiness: normalRandom(), // 행복
  credit: normalRandom(), // 학점
};

export default handleActions<IStudent, any>(
  {
    [UPDATE_KNOWLEDGE]: (state: IStudent, action: any) => {
      return {
        ...state,
        knowledge: state.knowledge + action.payload,
      };
    },
    [UPDATE_HAPPINESS]: (state: IStudent, action: any) => {
      return {
        ...state,
        happiness: state.happiness + action.payload,
      };
    },
  },
  initialState
);
