import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import {v4 as uuidv4} from "uuid"
import './App.css'

const TodoList = () => {

    const INITIAL_TODOS = []
    const [todos, setTodos] = useState(INITIAL_TODOS)

    const addTodo = (task) =>{
        setTodos(todos => [...todos, {id:uuidv4(), task:task}])
    }

    const removeTodo = (id) =>{
        setTodos(todos => todos.filter((todo)=>todo.id !== id))
        
    }

    return(
        <div className="flex-column center">
            <NewTodoForm addTodo={addTodo}/>
            {todos.map(({id, task})=><Todo key={id} id={id} task={task} removeTodo={removeTodo}/>)}
        </div>
    )
}

export default TodoList;