import React, {useState, useRef} from 'react';


function Task(){
  const [addTaskInput, setAddTaskInput] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [formInfo, setFormInfo] = useState("");
  const form = useRef();

  function handleAddTask(){
    setAddTaskInput(true);
  }

  function handleSubmit(e){
    e.preventDefault();
    const info = form.current.info.value;
    const category = form.current.category.value;
    setFormInfo({info, category});
    const _tasks = [...tasks];
    _tasks.push(formInfo);
    setTasks(_tasks);
    setAddTaskInput(false);
  }

  console.log(tasks);
  
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
            <h4>Hello, <strong>Akindele</strong></h4>
            {tasks.length === 1 ? <p>You have {tasks.length} task</p> : <p>You have {tasks.length} tasks</p> }
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
        <form ref={form} onSubmit={handleSubmit}>
          <input type="info" name='info' aria-label="info" placeholder='e.g I want to visit my uncle in Canada' />
          <input type="category" name='category' aria-label="category" placeholder='e.g (Vacation, Examination)' />
          <input className="btn submit" type="submit" value="Add Task" aria-label="category" />
        </form> 
        : null}
      </div>


      <div className="tasks-list" id='tasks-list'>
        {tasks.map((task) => }
      </div> 

      <span className="new-task">
        <i onClick={handleAddTask} className="fa fa-plus" aria-hidden="true"></i>
      </span>
    </section>
  );
}
 
export default Task; 