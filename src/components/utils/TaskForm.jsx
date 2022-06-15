import React from 'react';

const TaskForm = ({inputTextInfo, infoTextHandler, inputTextCategory, categoryTextHandler, handleTaskSubmit}) => {
  return (
    <form onSubmit={handleTaskSubmit}>
      <input value={inputTextInfo} onChange={infoTextHandler} type="info" name='info' aria-label="info" placeholder='e.g I want to visit my uncle in Canada' />
      <input value={inputTextCategory} onChange={categoryTextHandler} type="category" name='category' aria-label="category" placeholder='e.g (Vacation, Examination)' />
      <input className="btn submit" type="submit" value="Add Task" aria-label="submit" />
    </form>
  );
}

export default TaskForm;
