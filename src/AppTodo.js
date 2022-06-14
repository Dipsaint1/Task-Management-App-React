import React, { useState } from 'react';
import "./AppTodo.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import nextId from "react-id-generator";

function App(){
  const nextIdx = nextId();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return(
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText} 
        todos={todos}
        setTodos={setTodos}
        id={nextIdx}
      />
      <TodoList 
        todos={todos}
        setTodos = {setTodos}
      />
    </div>
  );
}
 
export default App;
