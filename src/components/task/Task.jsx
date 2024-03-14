import React from "react";
import styles from "./task.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

const Task = ({ item, onComplete, onDelete }) => {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(item.id)}
      >
        {item.isComplete ? <AiFillCheckCircle /> : <div />}
      </button>
      <p className={item.isComplete ? styles.textCompleted : ""}>
        {item.value}
      </p>
      <button className={styles.deleteButton} onClick={() => onDelete(item.id)}>
        <RiDeleteBin5Line size={20} />
      </button>
    </div>
  );
};

export default Task;
