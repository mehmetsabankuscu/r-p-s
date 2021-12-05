import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
      history: [],
      score: 0,
      currentComputer: "",
      winner: ""

  },
  status: "idle",
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.value.history.push(action.payload);
    },
    scoreBoard: (state, action) => {
        state.value.score += action.payload;
    },
    setCurrentComputerChoice: (state, action) => {
      state.value.currentComputer = action.payload;
    },
    setWinner: (state, action) => {
      state.value.winner = action.payload;
    }
    ,
    resetGame: (state) => {
      state.value.history = []
      state.value.score = 0
      state.value.winner = ""
      state.value.currentComputer = ""
    }
  },
});

export const { addHistory, scoreBoard, setCurrentComputerChoice, resetGame, setWinner } = historySlice.actions;
export default historySlice.reducer;
export const history = (state) => state.history.value.history;
export const score = (state) => state.history.value.score;
export const currentComputer = (state) => state.history.value.currentComputer;
export const winner = (state) => state.history.value.winner;
