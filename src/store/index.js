import { configureStore, createSlice } from "@reduxjs/toolkit";
import wordsJson from "utils/word-data.json";
const getWords = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const newWords = shuffled.slice(0, num);
  return newWords.map((word) => ({ ...word, status: "" }));
};

const initialState = {
  words: [],
  wordCount: 40,
  language: localStorage.getItem("language") || "turkish",
  wordInput: "",
  isTimeOver: false,
  isStarted: false,
  spaceCount: 0,
  keyCount: 0,
  correct: 0,
  incorrect: 0,
};
const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setWords(state, action) {
      state.words = getWords(wordsJson.words, state.wordCount);
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setWordInput(state, action) {
      state.wordInput = action.payload;
    },
    setIsTimeOver(state, action) {
      state.isTimeOver = action.payload;
    },
    setIsStarted(state, action) {
      state.isStarted = action.payload;
    },
    setSpaceCount(state, action) {
      if (action.payload) {
        state.spaceCount += action.payload;
      } else {
        state.spaceCount = 0;
      }
    },
    setKeyCount(state, action) {
      if (action.payload) {
        state.keyCount += action.payload;
      } else {
        state.keyCount = 0;
      }
    },

    setWordsBySpaceCount(state, action) {
      if (state.spaceCount < state.wordCount) {
        state.words[state.spaceCount].status = action.payload;
      }
    },
    removeWordsBySpaceCount(state, action) {
      state.words[state.spaceCount - 1].status = action.payload;
    },
    addCorrect: (state, action) => {
      if (action.payload) {
        state.correct += action.payload;
      } else {
        state.correct = 0;
      }
    },
    addInCorrect: (state, action) => {
      if (action.payload) {
        state.incorrect += action.payload;
      } else {
        state.incorrect = 0;
      }
    },
  },
});
export const {
  setWords,
  setLanguage,
  setWordInput,
  setIsTimeOver,
  setIsStarted,
  setSpaceCount,
  setKeyCount,
  resetSpaceCount,
  setWordsBySpaceCount,
  removeWordsBySpaceCount,
  addCorrect,
  addInCorrect,
} = wordSlice.actions;

export const store = configureStore({
  reducer: wordSlice.reducer,
});
