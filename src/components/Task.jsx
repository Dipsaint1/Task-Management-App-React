import React, {useState} from 'react';
import LoadTasks from "./utils/LoadTasks";
import nextId from "react-id-generator";

function Task({inputTextInfo, inputTextCategory, setInputTextInfo, setInputTextCategory, tasks, setTasks}){
  const nextIdx = nextId();

  const [addTaskInput, setAddTaskInput] = useState(false);

  function handleAddTask(){
    setAddTaskInput(true);
  }

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
            <h4>Hello, <strong>Oladapo</strong></h4>
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
        {addTaskInput ? 
        <form onSubmit={handleTaskSubmit}>
          <input value={inputTextInfo} onChange={infoTextHandler} type="info" name='info' aria-label="info" placeholder='e.g I want to visit my uncle in Canada' />
          <input value={inputTextCategory} onChange={categoryTextHandler} type="category" name='category' aria-label="category" placeholder='e.g (Vacation, Examination)' />
          <input className="btn submit" type="submit" value="Add Task" aria-label="submit" />
        </form> 
        : null}
      </div>

      <div className="tasks-list container-fluid" id='tasks-list'>
        {tasks.map(task => (
          <LoadTasks
            delete
            key={task.id}
            info={task.info}
            category={task.category}
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