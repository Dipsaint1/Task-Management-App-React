import React from 'react';

const LoadTasks = ({info, category}) => {
  return ( 
    <div className="task-box-container">
      <div className="task-box-details">
        <strong className="task-box-category">{category}</strong>
        <small className="task-box-info">{info}</small>
      </div>
      <i className="fa fa-ellipsis-v edit-task" aria-hidden="true"></i>
      <i className="fa fa-trash delete-task" aria-hidden="true"></i>
    </div>
  );
}
 
export default LoadTasks;