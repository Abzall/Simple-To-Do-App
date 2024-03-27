import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice/todoSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer, //Experiment with todo
  },
});

export default store;
