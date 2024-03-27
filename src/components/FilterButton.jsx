import React from "react";
import { markAllcompleted } from "../store/todoSlice/todoSlice";
import { useDispatch } from "react-redux";

const FilterButton = ({ handleSort }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none cursor-pointer"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="All">Default</option>
        <option value="Completed">Completed</option>
        <option value="Incompleted">Incomoleted</option>
      </select>
      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded hover:bg-purple-600"
        onClick={() => dispatch(markAllcompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
