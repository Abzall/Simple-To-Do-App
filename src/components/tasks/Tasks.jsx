import React from 'react'
import styles from './tasks.module.css'
import Task from '../task/Task'

const Tasks = ({tasks, onComplete, onDelete}) => {

    const quantityTasks = tasks.length;
    const quantityTasksCompleted = tasks.filter(e => e.isComplete).length;

  return (
    <section className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>Create Tasks</p>
                <span>{quantityTasks}</span>
            </div>

            <div>
                <p className={styles.textPurple}>Completed Tasks</p>
                <span>{quantityTasksCompleted} of {quantityTasks}</span>
            </div>
        </header>
        <div className={styles.list}>
            {
                tasks.map(item => (
                    <Task key={item.id} item={item} onComplete={onComplete} onDelete={onDelete}/>
                ))
            }
        </div>
    </section>
  )
}

export default Tasks