import React from 'react';
import styles from "./TaskEditor.module.css"

export default function TaskEditor({onAddTasks}) {
    return (
        <div className={styles.section}>
            <button onClick={onAddTasks} className={styles.button}>Add Task</button>
        </div>
    )
};
