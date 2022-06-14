import React from 'react';

const Todo = ({ text, todos, todo, setTodos }) => {

  function deleteHandler() {
    let _todos = [...todos];
    _todos = _todos.filter(item => item.id !== todo.id);
    setTodos(_todos);
  }

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return{
          ...item, 
          completed: !item.completed
        }
      }
      return item;
    }));
  }

  // const completeHandler = () => {
  //   const _todo = todos.map((item) => {
  //     if(item.id === todo.id){
  //       return{
  //         ...item,
  //         completed: !item.completed
  //       }
  //     }
  //     return item;
  //   });
  //   return setTodos(_todo);
  // }

  return ( 
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className="fa fa-check"></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className="fa fa-trash"></i>
      </button>
    </div>
   );
}
 
export default Todo; 