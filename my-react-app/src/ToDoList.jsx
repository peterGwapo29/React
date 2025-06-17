import React, {useEffect, useState} from 'react';

function ToDoList() {
    const [task, setTask] = useState(["Go to work", "Go to gym"]);
    const [newTask, setNewTask] = useState("");
    function HandleChangeInput(event){
        setNewTask(event.target.value);
    }

    function AddTask() {
        if (newTask.trim() === "") {
            alert("Please enter a task");
            return;
        }
        setTask([...task, newTask]);
        setNewTask("");
    }

    function DeleteTask(index) {
        const updateTask = task.filter((_, i) => i !== index);
        setTask(updateTask);
    }

    function MoveUp(index) {
        if (index === 0) return;
        const updatedTasks = [...task];
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
        setTask(updatedTasks);
    }

    function MoveDown(index) {
        if (index === task.length - 1) return;
        const updatedTasks = [...task];
        [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
        setTask(updatedTasks);
    }
    
    return(
        <div className="myTodos">
            <h1>To-Do-List</h1>

            <input  type="text" 
                    placeholder='Enter To do'
                    value={newTask}
                    onChange={HandleChangeInput}
            />

            <button id='add-task-button' onClick={AddTask}>Add task</button>

            <ul>
                {task.map((todo, ind) => 
                            <li key={ind}>
                                <span>{todo}</span>

                                <button id='delete-button' onClick={() => DeleteTask(ind) }>Delete</button>
                                
                                <button className='move'
                                        id='move-up-button'
                                        onClick={() => MoveUp(ind)}>
                                    Up
                                </button>

                                <button className='move'
                                        id='move-down-button'
                                        onClick={() => MoveDown(ind)}>
                                    Down
                                </button>
                            </li>)}
            </ul>
        </div>
    );
}

export default ToDoList