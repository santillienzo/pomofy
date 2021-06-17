import React, { useState } from 'react';
import './tasks.css'


const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [task,setTask] = useState("")
    const [adding, setAdding] = useState(false);


    const submitTask =(e)=>{
        e.preventDefault();
        setTasks([...tasks, {id:0 ,name: task}]);
        setTask("");
        setAdding(false)
    }

    const handleTask= (e)=>{
        setTask(e.target.value);
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
                                        <form action="" onSubmit={submitTask} className="taskForm">
                                            <li>
                                                <i class="fas fa-caret-right"></i>
                                                <input type="text" onChange={handleTask} value={task}/>
                                            </li>
                                        </form>
                                    )
                                    :(null)

                                }
                            </ul>
                            <ul>
                                {
                                    tasks.map(i =>(
                                        <li className="nav-container--menu_task-task">
                                            <p>{i.name}</p>
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