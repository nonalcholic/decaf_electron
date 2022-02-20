import { createContext, Dispatch } from 'react';
import { Sex } from 'renderer/objects/Person';
import { studentActions } from 'renderer/redux/student';
import { binaryRandom, normalRandom } from 'renderer/utils';

enum GameStatus {
  Ready = 'GAME_READY',
  Running = 'GAME_RUNNING',
}

export enum GameAction {
  Festival = 'one',
  Midterm = 'two',
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

    // temporary code
    this._dispatch(
      studentActions.initStudentList([
        this.newStudent(),
        this.newStudent(),
        this.newStudent(),
        this.newStudent(),
        this.newStudent(),
      ])
    );
    this.addAction(GameAction.Festival);
    // this.addAction(GameAction.Midterm);
    return true;
  }

  addAction(action: GameAction) {
    this._actionList.push(action);
  }

  play() {
    this._actionList.forEach((action) => {
      //student
      this._dispatch(studentActions.doEvent(action));

      //university
      // this._dispatch(studentActions.doEvent(action))}

      //structures
      // this._dispatch(studentActions.doEvent(action))}
    });
  }

  newStudent() {
    return {
      age: 20,
      sex: binaryRandom() as Sex,
      intelligence: normalRandom(0, 10),
      personality: normalRandom(0, 10),
      charm: normalRandom(0, 10),
      willingness: normalRandom(0, 10),
    };
  }
}

//@ts-ignore
export const GameManagerContext = createContext<GameManager>(null);
export default GameManager;
