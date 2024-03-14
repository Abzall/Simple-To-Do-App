import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import styles from "./header.module.css";

const Header = ({ addTask }) => {
  const [input, setInput] = useState("");

  const ChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <header className={styles.header}>
      <h1>Todo List</h1>
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={ChangeInput}
          value={input}
          placeholder="Type here..."
        />
        <button>
          Create
          <IoAddOutline size={25} />
        </button>
      </form>
    </header>
  );
};

export default Header;
