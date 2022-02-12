import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';
import { normalRandom } from 'renderer/utils/random';
import { IStudent } from './interfaces/studentInterface';

const STUDENT_RANDOM = 'STUDENT/RANDOM';

export const randomStudent = () => (dispatch: Dispatch) => {
  dispatch({ type: STUDENT_RANDOM });
};

const initialState: IStudent = {
  intelligence: normalRandom(), // 지성
  personality: normalRandom(), // 인성
  charm: normalRandom(), // 매력
  willingness: normalRandom(), // 의지
  luck: normalRandom(), // 운 ()
  sex: normalRandom(), // 성별 (0: male, 1: female)
  knowledge: normalRandom(), // 지식
  happiness: normalRandom(), // 행복
  credit: normalRandom(), // 학점
};

export default handleActions<IStudent, any>(
  {
    [STUDENT_RANDOM]: () => {
      // state: any, action: any
      return {
        intelligence: normalRandom(), // 지성
        personality: normalRandom(), // 인성
        charm: normalRandom(), // 매력
        willingness: normalRandom(), // 의지
        luck: normalRandom(), // 운 ()
        sex: normalRandom(), // 성별 (0: male, 1: female)
        knowledge: normalRandom(), // 지식
        happiness: normalRandom(), // 행복
        credit: normalRandom(), // 학점
      };
    },
  },
  initialState
);
