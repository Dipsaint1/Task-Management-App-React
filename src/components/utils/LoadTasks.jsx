import React, {useState} from 'react';


const LoadTasks = ({info, category, task, tasks, setTasks, setAddTaskInput, addTaskInput, inputTextInfo}) => {
  const [data, setData] = useState({info: "", category: "", id: ""});
  
  const deleteHandler = (task) => {
    const __tasks = [...tasks];
    setTasks(__tasks.filter(item => item.id !== task.id));
  }

  const editHandler = (task) => {
    const __tasks = [...tasks];
    const __taskToEdit = __tasks.filter(item => item.id === task.id);
    console.log(__taskToEdit[0]);
    setData([...__taskToEdit, {info: __taskToEdit[0].info}]);
    console.log(data);
    setAddTaskInput(!addTaskInput);
  }

  return ( 
    <div className="task-box-container">
      <div className="task-box-details">
        <strong className="task-box-category">{category}</strong>
        <small className="task-box-info">{info}</small>
      </div>
      <i onClick={() => editHandler(task)} className="fa fa-ellipsis-v edit-task" aria-hidden="true"></i>
      <i onClick={() => deleteHandler(task)} className="fa fa-trash delete-task" aria-hidden="true"></i>
    </div>
  );
}

export default LoadTasks;