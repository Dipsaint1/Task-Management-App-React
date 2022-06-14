import React, { useState, useEffect } from 'react';
import "./AppTodo.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import nextId from "react-id-generator";

function App(){

  const nextIdx = nextId();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // filter todos
  useEffect(() => {
    const _todos = [...todos];
    if(status === "completed") setFilteredTodos(_todos.filter(todo => todo.completed));
    else if(status === "uncompleted") setFilteredTodos(_todos.filter(todo => !todo.completed));
    else setFilteredTodos(_todos);
  }, [todos, status]);

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
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos = {setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
