import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const keyLocal = "items"
  // itemLocal

  const getLocal = () => {
    const saved = localStorage.getItem(keyLocal);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    getLocal();
  }, []);

  const saveLocal = (newValue) => {
    setTasks(newValue);
    localStorage.setItem(keyLocal, JSON.stringify(newValue));
  };

  const addTask = (value) => {
    if (value !== "") {
      saveLocal([
        {
          id: Math.random(),
          value: value,
          isComplete: false,
        },
        ...tasks,
      ]);
    } else {
      alert('Type your task')
    }
  };

  const onComplete = (itemId) => {
    const toggle = tasks.map((e) => {
      if (e.id === itemId)
        return {
          ...e,
          isComplete: !e.isComplete,
        };
      return e;
    });
    saveLocal(toggle);
  };

  const onDelete = (itemId) => {
    const del = tasks.filter((e) => e.id !== itemId);
    saveLocal(del);
  };

  return (
    <div>
      <Header addTask={addTask} />
      <Tasks tasks={tasks} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
};

export default App;
