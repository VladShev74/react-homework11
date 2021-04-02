import React, { Component } from 'react';
import TaskEditor from "./Tasks/TaskEditor";
import createTask from "./Tasks/createTask";
import TaskList from "./Tasks/TaskList";

export default class App extends Component {
    state = {
        tasks: [],
    }

    addTask = () => {
        const task = createTask();
        this.setState((prevState) => {
            return {
                tasks: [...prevState.tasks, task]
            }
        })
    }

    deleteTask = (id) => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter(task => task.id !== id)
            }
        })
    }


    render() {
        const { tasks } = this.state;
        return (
            <div>
                <TaskEditor onAddTasks={this.addTask} />
                <TaskList tasks={tasks} onDeleteTask={this.deleteTask} />
            </div>
        )
    }
}
