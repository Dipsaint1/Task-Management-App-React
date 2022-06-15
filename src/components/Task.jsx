import React, {useState} from 'react';
import LoadTasks from "./utils/LoadTasks";
import TaskForm from "./utils/TaskForm";

import nextId from "react-id-generator";

function Task({inputTextInfo, inputTextCategory, setInputTextInfo, setInputTextCategory, tasks, setTasks, details, addTaskInput, setAddTaskInput}){
  const nextIdx = nextId();
  const [onEdit, setOnEdit] = useState(false);


  const infoTextHandler = (e) => {
    setInputTextInfo(e.target.value);
  } 

  const categoryTextHandler = (e) => {  
    setInputTextCategory(e.target.value);
  }

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, {info : inputTextInfo, category: inputTextCategory , id: nextIdx}]);
    setInputTextCategory("");
    setInputTextInfo("");
    setAddTaskInput(false);
  }

  function handleAddTask(){
    setAddTaskInput(!addTaskInput);
  }

  return ( 
    <section id='task'>
      <div className="container-lg">
        <div className='menu-bar'>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        <div className="profile">
          <div className='profile-details'>
            <h4>Hello, <strong>{details.name}</strong></h4>
            {tasks.length < 2 ? <p>You have {tasks.length} task</p> : <p>You have {tasks.length} tasks</p> }
          </div>

          <div className="profile-img-container">
            <div className="profile-img-inner-container">
              <i className="user-icon fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="task-input">
        {onEdit ? <TaskForm />
          : null
        }

        {addTaskInput ? 
          <TaskForm inputTextInfo={inputTextInfo} infoTextHandler={infoTextHandler} inputTextCategory={inputTextCategory} categoryTextHandler={categoryTextHandler} handleTaskSubmit={handleTaskSubmit} />
          : null
        }
      </div>

      <div className="tasks-list container-fluid" id='tasks-list'>
        {tasks.map(task => (
          <LoadTasks
            task={task}
            key={task.id}
            info={task.info}
            category={task.category}
            tasks={tasks}
            setTasks={setTasks}
            setAddTaskInput={setAddTaskInput}
            addTaskInput={addTaskInput}
            inputTextInfo={inputTextInfo}
            setInputTextInfo={setInputTextInfo}

          />
        ))}
      </div> 

      <span className="new-task">
        <i onClick={handleAddTask} className="fa fa-plus" aria-hidden="true"></i>
      </span>
    </section>
  );
}

export default Task; 