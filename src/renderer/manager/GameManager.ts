import { createContext, Dispatch } from 'react';
import { studentActions } from '../redux/student';
import { DefaultAction, GameAction, SeasonAction } from '../redux/actions';
import { universityActions } from '../redux/university';

enum GameStatus {
  Ready = 'GAME_READY',
  Running = 'GAME_RUNNING',
}

class GameManager {
  private _dispatch: Dispatch<any>;

  private _status: GameStatus;

  private _actionList: GameAction[];

  constructor(dispatch: Dispatch<any>) {
    this._dispatch = dispatch;
    this._status = GameStatus.Ready;
    this._actionList = [];
  }

  startGame() {
    if (this._status !== GameStatus.Ready) return false;

    this._status = GameStatus.Running;

    // Initialize
    this._dispatch(studentActions.initialize(5));
    this._dispatch(universityActions.initialize(null));

    // FIXME: Temporary code
    this.addAction(SeasonAction.Festival);
    // this.addAction(GameAction.Midterm);

    return true;
  }

  addAction(action: GameAction) {
    this._actionList.push(action);
  }

  cleanAction() {
    this._actionList.length = 0;
  }

  play() {
    this._actionList.forEach((action) => {
      // student
      this._dispatch(studentActions.execute(action));

      // university
      this._dispatch(universityActions.execute(action));

      // structures
      // this._dispatch(studentActions.doEvent(action))}
    });
    this.cleanAction();
    this.addAction(DefaultAction.Weeks);
  }
}

export const GameManagerContext = createContext<GameManager>({} as GameManager);
export default GameManager;
