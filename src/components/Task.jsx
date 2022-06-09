import React, {useState} from 'react';
import NewTask from "../components/NewTask";

function Task(){
  const [task, setTask] = useState();


  const newTask = () => {
    return(
      <NewTask/>
    );

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
            <h4>Hello, <strong>Akindele</strong></h4>
            <p>You have 4 tasks</p>
          </div>

          <div className="profile-img-container">
            <div className="profile-img-inner-container">
              <i className="user-icon fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
  
        </div>
      </div>

      <div className="task-list">
        
      </div>

      <span className="new-task">
        <i onClick={newTask} className="fa fa-plus" aria-hidden="true"></i>
      </span>
    </section>
  );
}
 
export default Task; 