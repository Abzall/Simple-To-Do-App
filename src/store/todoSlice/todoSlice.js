import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  sortCriteria: "All",
  filteredTodoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push({
        id: action.payload.id,
        task: action.payload.task,
        isComplete: false,
      });
    },
    sortTodo: (state, action) => {
      state.sortCriteria = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const index = state.todoList.findIndex((todo) => {
        return todo.id === id;
      });
      state.todoList[index].task = task;
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.todoList.findIndex((todo) => {
        return todo.id === id;
      });
      state.todoList[index].isComplete = !state.todoList[index].isComplete;
    },
    searchTodo: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredTodoList = state.todoList.filter((todo) =>
        todo.task.toLowerCase().includes(searchTerm)
      );
    },
    markAllcompleted: (state) => {
      state.todoList.forEach((todo) => {
        todo.isComplete = true;
      });
    },
  },
});

export const {
  setTodoList,
  addTodo,
  sortTodo,
  updateTodo,
  toggleTodo,
  searchTodo,
  markAllcompleted,
} = todoSlice.actions;
export default todoSlice.reducer;
