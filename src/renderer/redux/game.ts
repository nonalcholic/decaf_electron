import { IGame } from './interfaces/gameInterface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IGame = {
  isRunning: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    runGame: (state: IGame, action: any) => {
      return {
        ...state,
        isRunning: action.payload,
      };
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
