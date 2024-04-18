import React from "react";
import "./App.css"

const Todo = ({id, task, removeTodo}) =>{


    const deleteTodo = (e) =>{
        e.preventDefault()
        removeTodo(id)
    }

    return(
        <div className="flex center">
            <div className="clickable" onClick={deleteTodo}>X</div>
            <div>{task}</div>
        </div>
    )
}

export default Todo;