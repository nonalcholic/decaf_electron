import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';
import { IGame } from './interfaces/gameInterface';

const GAME_RUNNING = 'GAME/RUNNING';

export const runGame = (isRun: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: GAME_RUNNING, payload: isRun });
};

const initialState: IGame = {
  isRunning: false,
};

export default handleActions<IGame, any>(
  {
    [GAME_RUNNING]: (state: IGame, action: any) => {
      return {
        ...state,
        isRunning: action.payload,
      };
    },
  },
  initialState
);
