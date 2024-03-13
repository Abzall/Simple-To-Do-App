import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Tasks from './components/tasks/Tasks'

const App = () => {

  const [tasks, setTasks] = useState([])

  const getLocal = () => {
    const saved = localStorage.getItem('itemLocal')
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    getLocal()
  }, [])

  const saveLocal = (newItem) => {
    setTasks(newItem)
    localStorage.setItem('itemLocal', JSON.stringify(newItem))
  }

  const addTask = (input) => {
    saveLocal([
      ...tasks,
      {
        id: Math.random(),
        value: input,
        isComplete: false
      }
    ])
  }

  const onComplete = (itemId) => {
    const toggle = tasks.map(e => {
      if(e.id === itemId) 
      return {
        ...e,
        isComplete: !e.isComplete
      }
      return e
    })
    saveLocal(toggle)
  }

  const onDelete = (itemId) => {
    const del = tasks.filter((e) => e.id !== itemId)
    saveLocal(del)
  }

  return (
    <div>
      <Header addTask={addTask}/>
      <Tasks tasks={tasks} onComplete={onComplete} onDelete={onDelete}/>
    </div>
  )
}

export default App