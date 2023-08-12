import React, {useState} from 'react'



const Task = (props) => {

  const {taskList, setTaskList} = useState([]);
    //-----------------------------------
    // I) PROP, STATE AND AUX VARIABLES
    // ----------------------------------

    const {index} = props
    
    let selectedTask = taskList[index];
    let taskStatus = taskList[index].isComplete;

    let textComplete = {
        textDecoration: "none"
    }
    let textNonComplete = {
        textDecoration: "line-through"
    }

    //-----------------------------------
    // II) HANDLERS
    //-----------------------------------

    const checkHandler = (e) => {

        taskList[index].isComplete = !taskList[index].isComplete
        setTaskList([...taskList])

    }

    const deleteHandler = (e) => {

        e.preventDefault();
        let filteredList = taskList.filter(task => taskList.indexOf(task) != index);
        setTaskList(filteredList);
    }

    //-----------------------------------
    // III) JSX
    //-----------------------------------

    return (
        <div>
            <form onSubmit = {deleteHandler}>
                <input className="" type="checkbox" checked={taskStatus} onChange={checkHandler}/>
                <p className="d-inline-block mb-1 mx-2" style={taskStatus?textNonComplete:textComplete}> {selectedTask.name} </p>
                <input className="btn btn-danger btn-sm py-0 align-top" type="submit" value="Delete"/>
            </form> 
        </div>
    )
}

export default Task