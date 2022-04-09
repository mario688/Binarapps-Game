import { createSlice, configureStore } from "@reduxjs/toolkit";

interface InitState {
  goodWords: string[];
  selectedWords: string[];
}
const initState: InitState = {
  goodWords: [],
  selectedWords: [],
};
const gameSlice = createSlice({
  name: "game",
  initialState: initState,
  reducers: {
    selectWord: (state, action) => {
      console.log("added: " + action.payload);
      state.selectedWords.push(action.payload);
    },
    deselectWord: (state, action) => {
      const newArr = state.selectedWords.filter((el) => el != action.payload);
      console.log("deleted: " + action.payload);
      state.selectedWords = newArr;
    },
  },
});
export const store = configureStore({
  reducer: gameSlice.reducer,
});

export const gameActions = gameSlice.actions;
