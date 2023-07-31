import './App.css';
import { useState } from 'react';
import Description from "./components/Description/description.component";
import List from "./components/List/list.component"

function App() {
  const [description, setDescription] = useState("");
  const [taskList, setTasklist] = useState([]);

  const handleAddTasks = (tasks) => {
    setTasklist((taskList) => [...taskList, tasks]);
  };

  const handleDeleteTasks = (tasks) => {
    setTasklist((taskList) => 
    taskList.filter((task) => task.description !== tasks));
  };

  return (
    <div className="App">
      

        <div>
          <h1>Lista de quehaceres</h1>
          <div>
            <Description
              onAddTasks={handleAddTasks}
              description={description}
              setDescription={setDescription}
            />
          </div>
          <div>
            <List
              taskList={taskList}
              setList={setTasklist}
              onDeleteTasks={handleDeleteTasks}
            />
          </div>
        </div>
      
    </div>
  );
}

export default App;
