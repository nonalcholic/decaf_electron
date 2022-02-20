import { createContext } from 'react';

enum GameStatus {
  Ready = 'GAME_READY',
  Running = 'GAME_RUNNING',
}

class GameManager {
  private _status: GameStatus;

  constructor() {
    this._status = GameStatus.Ready;
  }

  startGame() {
    if (this._status !== GameStatus.Ready) return false;

    this._status = GameStatus.Running;
    return true;
  }

  isRunning() {
    if (this._status !== GameStatus.Running) return false;
    return true;
  }
}

//@ts-ignore
export const GameManagerContext = createContext<GameManager>(null);
export default GameManager;
