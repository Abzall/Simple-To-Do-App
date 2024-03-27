import React from "react";
import TodoItems from "./TodoItems";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList, sortTodo } from "../store/todoSlice/todoSlice";

const TodoList = ({sortTodoList}) => {
  return (
    <ul>
      <li className="text-md text-center my-2 text-gray-600">
        Completed tasks 3 of 25
      </li>
      {sortTodoList.map((item) => (
        <TodoItems key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;

// <ul>
//       {todoList.length === 0 ? (
//         <p className="text-md text-center my-2 text-gray-600">You have no task's</p>
//       ) : (
//         <>
//           <li className="text-md text-center my-2 text-gray-600">
//             Completed tasks 3 of 25
//           </li>
//           {/* map <TodoItems/> */}
//           <TodoItems />
//         </>
//       )}
//     </ul>
