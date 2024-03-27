import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  addTodo,
  setTodoList,
  toggleTodo,
  updateTodo,
} from "../store/todoSlice/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoItems = ({ item }) => {
  const [input, setInput] = useState(item.task);
  const [showModal, setShowModal] = useState(false);
  const todoList = useSelector((state) => state.todo.todoList);
  const [currentTodo, setCurrentTodo] = useState(null);
  const dispatch = useDispatch();

  const handleUpdateTodoList = (id, task) => {
    if (task.trim().length === 0) {
      alert("Please enter a task");
    } else {
      dispatch(
        updateTodo({
          id: id,
          task: task,
        })
      );
      setShowModal(false);
    }
  };

  const handleDeleteTodo = (id) => {
    const updateTodoList = todoList.filter((todo) => todo.id !== id);
    dispatch(setTodoList(updateTodoList));
    localStorage.setItem("todos", JSON.stringify(updateTodoList));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({id}));
  };

  return (
    <>
      {showModal && (
        <div className="fixed w-full h-full bg-black bg-opacity-50 top-0 left-0 flex items-center justify-center">
          <div className="bg-white p-5 rounded w-[30%]">
            <input
              className="flex-grow p-2 border-b-2 w-full italic border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Undate your task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex justify-between items-center mt-4">
              <button
                className="text-lg px-5 py-1 bg-blue-500 text-white ml-2 rounded hover:bg-blue-600"
                onClick={() => {
                  setShowModal(false);
                  handleUpdateTodoList(currentTodo.id, input);
                }}
              >
                Enter
              </button>
              <button
                className="text-lg px-2 py-1 bg-red-500 text-white ml-2 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex items-center">
          <span className="mr-4 text-gray-500">1</span>
          <span className="mr-4">{item.task}</span>
        </div>
        <div className="space-x-3 ml-8">
          <button
            className="text-sm bg-blue-500 text-white sm:px-2 py-2 rounded hover:bg-blue-600"
            onClick={() => handleToggleTodo(item.id)}
          >
            <FaRegCheckCircle />
          </button>
          <button
            className="text-sm bg-blue-500 text-white sm:px-2 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              setShowModal(true);
              setCurrentTodo(item);
              // setNewTask(item.task);
            }}
          >
            <FaPencil />
          </button>
          <button
            className="text-sm bg-red-500 text-white sm:px-2 py-2 rounded hover:bg-red-600"
            onClick={() => handleDeleteTodo(item.id)}
          >
            <FaRegTrashCan />
          </button>
        </div>
      </li>

      {/* <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex items-center">
          <span className="mr-4 text-gray-500">1</span>
          <span className="mr-4">Text</span>
        </div>
        <div className="space-x-3 ml-8">
          <button className="text-sm bg-blue-500 text-white sm:px-2 py-2 rounded hover:bg-blue-600">
            <FaPencil />
          </button>
          <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-2 rounded hover:bg-blue-600">
            <FaRegCheckCircle />
          </button>
          <button className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-2 rounded hover:bg-red-600">
            <FaRegTrashCan />
          </button>
        </div>
      </li> */}

      {/* <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex items-center">
          <span className="mr-4 text-gray-500">1</span>
          <span className="mr-4">Text</span>
        </div>
        <div className="space-x-3 ml-8">
          <button className="text-sm bg-blue-500 text-white sm:px-2 py-2 rounded hover:bg-blue-600">
            <FaPencil />
          </button>
          <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-2 rounded hover:bg-blue-600">
            <FaRegCheckCircle />
          </button>
          <button className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-2 rounded hover:bg-red-600">
            <FaRegTrashCan />
          </button>
        </div>
      </li> */}
    </>
  );
};

export default TodoItems;
