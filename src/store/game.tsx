import { createSlice, configureStore } from "@reduxjs/toolkit";

interface InitState {
  goodWords: string[];
  selectedWords: string[];
  score: number;
}
const initState: InitState = {
  goodWords: [],
  selectedWords: [],
  score: 0,
};
const gameSlice = createSlice({
  name: "game",
  initialState: initState,
  reducers: {
    setGoodWords: (state, action: { payload: string[] }) => {
      state.goodWords = action.payload;
    },
    selectWord: (state, action) => {
      state.selectedWords.push(action.payload);
    },
    deselectWord: (state, action) => {
      const updatedSelectedWords = state.selectedWords.filter(
        (el) => el != action.payload
      );
      state.selectedWords = updatedSelectedWords;
    },
    countScore: (state) => {
      state.score = 0;
      // (liczba zaznaczonych poprawnych odpowiedzi * 2) - (liczba zaznaczonych błędnych odpowiedzi +
      //   liczba niezaznaczonych poprawnych odpowiedzi).

      const { goodWords, selectedWords } = state;

      const numberOfSelectedGoodWords = selectedWords.filter((el) =>
        goodWords.includes(el)
      ).length;
      const numberOfSelectedWrongWords =
        selectedWords.length - numberOfSelectedGoodWords;

      const numberOfUnselectedGoodWords =
        goodWords.length - numberOfSelectedGoodWords;

      state.score =
        numberOfSelectedGoodWords * 2 -
        (numberOfSelectedWrongWords + numberOfUnselectedGoodWords);

      console.log(state.score);
    },
  },
});
export const store = configureStore({
  reducer: gameSlice.reducer,
});

export const gameActions = gameSlice.actions;
