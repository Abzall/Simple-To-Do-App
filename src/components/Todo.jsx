import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodoList,
  addTodo,
  sortTodo,
  searchTodo,
} from "../store/todoSlice/todoSlice";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList); // Без todo попробуй. Попробуй изменить name.
  const filteredTodoList = useSelector((state) => state.todo.filteredTodoList);
  const sortCriteria = useSelector((state) => state.todo.sortCriteria);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList]);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos && todos !== "undefined") {
      // Уточни этот момент
      const localTodoList = JSON.parse(todos);
      if (localTodoList) {
        dispatch(setTodoList(localTodoList));
      }
    }
  }, []);

  const handleAddTodo = (task) => {
    if (task.trim().length === 0) {
      alert("Please enter a task");
    } else {
      dispatch(
        addTodo({
          id: Date.now(),
          task: task,
        })
      );
      setNewTask("");
    }
  };

  const handleSort = (sortCriteria) => {
    dispatch(sortTodo(sortCriteria));
  };

  const sortTodoList = (searchTerm ? filteredTodoList : todoList).filter(
    (todo) => {
      if (sortCriteria === "All") return true;
      if (sortCriteria === "Completed" && todo.isComplete) return true;
      if (sortCriteria === "Incompleted" && !todo.isComplete) return true;
      return false;
    }
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    dispatch(searchTodo(term));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 rounded-md bg-gray-100">
      <h1 className="mt-3 mb-6 text-2xl text-gray-700 font-bold text-center uppercase">
        Todo List
      </h1>
      <div className="flex items-center mb-4">
        <input
          className="flex-grow p-2 border-b-2 italic border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter Your Text..."
          ref={inputRef}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleAddTodo(newTask)}
        >
          <FaPlus />
        </button>
      </div>

      <div className="flex items-center justify-between relative">
        <FilterButton handleSort={handleSort} />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 italic border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="absolute right-2 text-gray-300 text-lg">
            <FaSearch />
          </div>
        </div>
      </div>
      <TodoList sortTodoList={sortTodoList} />
    </div>
  );
};

export default App;
