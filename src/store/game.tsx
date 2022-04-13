import { createSlice, configureStore } from "@reduxjs/toolkit";

interface InitState {
  gameProp: {
    goodWords: string[];
    questionCategory: string;
  };

  selectedWords: string[];
  score: number;
  showAnswers: boolean;
}
const initState: InitState = {
  gameProp: {
    goodWords: [],
    questionCategory: "",
  },
  selectedWords: [],
  score: 0,
  showAnswers: false,
};
const gameSlice = createSlice({
  name: "game",
  initialState: initState,
  reducers: {
    setGameProp: (state, action) => {
      const { category, good_words } = action.payload;
      state.gameProp = {
        goodWords: good_words,
        questionCategory: category,
      };
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
      // (liczba zaznaczonych poprawnych odpowiedzi * 2) - (liczba zaznaczonych błędnych odpowiedzi +
      //   liczba niezaznaczonych poprawnych odpowiedzi).

      const { selectedWords } = state;
      const { goodWords } = state.gameProp;

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
      state.selectedWords = [];
    },
  },
});

export const store = configureStore({
  reducer: gameSlice.reducer,
});

export const gameActions = gameSlice.actions;
