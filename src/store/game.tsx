import { createSlice, configureStore } from "@reduxjs/toolkit";

interface InitState {
  goodWords: string[];
  selectedWords: string[];
  score: number;
  showAnswers: boolean;
}
const initState: InitState = {
  goodWords: [],
  selectedWords: [],
  score: 0,
  showAnswers: false,
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
        (el) => el !== action.payload
      );
      state.selectedWords = updatedSelectedWords;
    },
    checkAnswers: (state) => {
      state.showAnswers = !state.showAnswers;
    },
    countScore: (state) => {
      state.score = 0;
      console.log("-------------------------------");
      console.log("Powinno być 0: " + state.score);
      // (liczba zaznaczonych poprawnych odpowiedzi * 2) - (liczba zaznaczonych błędnych odpowiedzi +
      //   liczba niezaznaczonych poprawnych odpowiedzi).

      const { goodWords, selectedWords } = state;
      console.log("zestaw: " + goodWords);
      console.log("selectedWords: " + selectedWords);
      console.log("------");

      const numberOfSelectedGoodWords = selectedWords.filter((el) =>
        goodWords.includes(el)
      ).length;

      console.log("numberOfSelectedGoodWords: " + numberOfSelectedGoodWords);

      const numberOfSelectedWrongWords =
        selectedWords.length - numberOfSelectedGoodWords;
      console.log(
        "numberOfSelectedWrongWords: " +
          numberOfSelectedWrongWords +
          ", " +
          selectedWords.length +
          " - " +
          numberOfSelectedGoodWords
      );

      const numberOfUnselectedGoodWords =
        goodWords.length - numberOfSelectedGoodWords;
      console.log(
        "numberOfUnselectedGoodWords: " + numberOfUnselectedGoodWords
      );
      state.score =
        numberOfSelectedGoodWords * 2 -
        (numberOfSelectedWrongWords + numberOfUnselectedGoodWords);

      console.log(state.score);
      state.selectedWords = [];
      console.log("-------------------------------");
    },
  },
});

export const store = configureStore({
  reducer: gameSlice.reducer,
});

export const gameActions = gameSlice.actions;
