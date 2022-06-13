import React from 'react';
import nextId from "react-id-generator";



const Form = ({setInputText, todos, setTodos, inputText}) => {
  const nextIdx = nextId();

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  } 

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id: nextIdx}]);
    setInputText("");
  }

  return ( 
    <form>
      <input 
        value={inputText}
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
   );
}
 
export default Form;

