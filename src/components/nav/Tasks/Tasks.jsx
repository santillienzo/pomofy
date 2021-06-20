import React, { useState } from 'react';
import './tasks.css'



const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [task,setTask] = useState("")
    const [adding, setAdding] = useState(false);


    const handleSubmit =(e)=>{
        e.preventDefault();
        setTasks([...tasks, {id:0 ,name: task}]);
        setTask("");
        setAdding(false)
        addTask(tasks)
    }

    const handleTask= (e)=>{
        setTask(e.target.value);
    }

    const addTask = async(tasks)=>{
        console.log("new task added")
    }

    return (
        <div className="nav-container--menu_task">
                            <ul>
                                {
                                    adding ?
                                    (
                                        <li onClick={()=>setAdding(false)} className="non-selectable">
                                            <i class="fas fa-chevron-down"></i>
                                            <p>Agregar Tareas</p>
                                        </li>
                                    )
                                    :
                                    (
                                        <li onClick={()=>setAdding(true)} className="non-selectable">
                                            <i className="far fa-plus-square"></i>
                                            <p>Agregar Tareas</p>
                                        </li>
                                    )
                                }
                                {
                                    adding ?
                                    (
                                        <form action="" onSubmit={handleSubmit} className="taskForm">
                                            <li>
                                                <i class="fas fa-caret-right"></i>
                                                <input 
                                                    type="text" 
                                                    onChange={handleTask} 
                                                    value={task} placeholder="Tarea" 
                                                    name="taskName"
                                                />
                                            </li>
                                        </form>
                                    )
                                    :(null)

                                }
                            </ul>
                            <ul>
                                {
                                    tasks.map((element, i) =>(
                                        <li className="nav-container--menu_task-task" key={i}>
                                            <p>{element.name}</p>
                                            <i class="fas fa-edit"></i>
                                            <i className="fas fa-trash-alt"></i>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
    );
};

export default Tasks;