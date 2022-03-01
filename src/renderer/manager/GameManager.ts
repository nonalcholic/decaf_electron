import { createContext, Dispatch } from 'react';
import { departmentActions } from 'renderer/redux/department';
import { DepartmentMangager } from 'renderer/objects/Department';
import { StudentMangager } from 'renderer/objects/Student';
import { studentActions } from '../redux/student';
import {
  ActionPayload,
  DefaultAction,
  DepartmentAction,
  StudentAction,
} from '../redux/actions';
import { universityActions } from '../redux/university';

enum GameStatus {
  Ready = 'GAME_READY',
  Running = 'GAME_RUNNING',
}

class GameManager {
  private _dispatch: Dispatch<any>;

  private _status: GameStatus;

  private _actionList: ActionPayload[];

  constructor(dispatch: Dispatch<any>) {
    this._dispatch = dispatch;
    this._status = GameStatus.Ready;
    this._actionList = [];
  }

  // TODO: Loop를 도는 함수가 하나 있었으면 좋겠음
  // 게임이 끝날 때까지 매 턴마다 매번 해줘야하는 일들이 있을 것 같아서
  // 예시: 한 주를 더하고, 어떤 조건을 만족했는지 확인하고... 등등?
  //      여기서 조건은, 게임이 끝날 조건 혹은 특정 액션이 발동해야하는 조건 등

  startGame() {
    if (this._status !== GameStatus.Ready) return false;

    this._status = GameStatus.Running;

    // Initialize
    this._dispatch(universityActions.initialize({}));
    this._dispatch(departmentActions.initialize({}));
    this._dispatch(studentActions.initialize({}));

    const department = DepartmentMangager.create('CS');
    this._dispatch(
      departmentActions.execute({
        type: DepartmentAction.Create,
        body: department,
      })
    );
    this._dispatch(
      studentActions.execute({
        type: StudentAction.Create,
        body: [
          StudentMangager.create(department.id),
          StudentMangager.create(department.id),
          StudentMangager.create(department.id),
          StudentMangager.create(department.id),
          StudentMangager.create(department.id),
        ],
      })
    );

    // FIXME: Temporary code
    // this.addAction(SeasonAction.Festival);
    // this.addAction(GameAction.Midterm);

    return true;
  }

  addAction(action: ActionPayload) {
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

      // TODO: structures의 의미?
      // structures
      // this._dispatch(studentActions.doEvent(action))}
    });
    this.cleanAction();
    this.addAction({ type: DefaultAction.Weeks });
  }
}

export const GameManagerContext = createContext<GameManager>({} as GameManager);
export default GameManager;
