import React from 'react';
import styles from "./TaskList.module.css"

export default function TaskList({tasks, onDeleteTask}) {
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li>
                        <h1 className={styles.id}>{task.id}</h1>
                        <p className={styles.text}>{task.text}</p>
                        <button onClick= {() => onDeleteTask(task.id)} className={styles.button}>Delete Task</button> 
                    </li>
                ))}
            </ul>
        </div>
    )
}
