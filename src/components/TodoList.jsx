import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ sortTodoList }) => {
  const completedTasks = sortTodoList.filter((item) => item.isComplete).length;
  const totalTasks = sortTodoList.length;

  return (
    <ul>
      {sortTodoList.length === 0 ? (
        <p className="text-md text-center my-2 text-gray-600">
          You have no task's
        </p>
      ) : (
        <li className="text-md text-center my-2 text-gray-600">
          Completed tasks {completedTasks} of {totalTasks}
        </li>
      )}

      {sortTodoList.map((item, index) => (
        <TodoItems key={item.id} item={item} index={index} />
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
