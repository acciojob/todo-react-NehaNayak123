import React from "react";
import { useState } from "react";
import './../styles/App.css';
// import ToDoList from "./ToDoList";

const App = () => {
  const [todos, setTodos]=useState([]);
    const [newTodo, setNewToDo]=useState('');

    const handleInput= (e)=>{
        setNewToDo(e.target.value)
    }
    const addToDo= ()=>{
        if(newTodo.trim()){   
            setTodos([...todos, newTodo]);
            setNewToDo('');
        } 
        console.log("todos", todos);
        
    }
    const removeToDo=(index)=>{
        setTodos(todos.filter((todo, i)=> i !== index));
    }
  return (
    <div className="container">
        {/* Do not remove the main div */}
        // <ToDoList/>
      <h1>To-Do List</h1>
            <div className="main">
                <div>
                    <input 
                        placeholder="Write Task Here"
                        type="text"
                        value={newTodo}
                        onChange={handleInput}
                    />
                    <button onClick={addToDo}>Add Todo</button>
                </div>
                <ul className="lists">
                    {
                        todos.map((todo, index)=>
                            <li key={index}>
                                {todo}
                                <button onClick={()=>removeToDo(index)}>Delete</button>
                            </li>
                        )
                    }
                </ul>
            </div>
    </div>
  )
}

export default App
