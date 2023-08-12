import React, {useState} from 'react'
import Task from './task.component';

const Input = (props) => {
    
    //-----------------------------------
    // I) PROP, STATE AND AUX VARIABLES
    // ----------------------------------

    const {taskList, setTaskList} = useState([]);
    const [taskName, setTaskName] = useState("");

    //-----------------------------------
    // II) HANDLERS
    //-----------------------------------

    const inputHandler = (e) => {
        
        setTaskName(e.target.value);
    }

    const formHandler = (e) => {
        // Prevent to refresh the page when submitting
        e.preventDefault();
        let newTask = {
            name: taskName,
            isComplete: false
        }
        setTaskList([...taskList,newTask]);
        setTaskName("");
    }

    //-----------------------------------
    // III) JSX
    //-----------------------------------

    return (
        <div className="my-3">
         
            <form onSubmit = { formHandler }>
            
                <div className="form-group">
                    <input type="text" className="form-control" onChange={ inputHandler } name="task" value={taskName}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            
            <div className="App bg-light text-left">
            <div className="container p-3">
                <h2>Todo List</h2>
                <div className="w-50">
                    <h4>Add a new task:</h4>
                    <Input taskList={taskList} setTaskList={setTaskList} ></Input>
                
                    <h4>List of current tasks:</h4>
                    
                    { taskList.map((task,i) => 
                        <Task key={i} index = {i} taskList={taskList} setTaskList={setTaskList} ></Task>
                    )}
                    
                </div>
            </div>
        </div>

        </div>
    )
}

export default Input