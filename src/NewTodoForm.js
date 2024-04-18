import React, {useState} from "react";

const NewTodoForm = ({addTodo}) =>{

    const INITIAL_FORM_STATE = {
        todo:''
    }

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
        
    }

    const handleSubmit = (e) =>{
        const {todo} = formData
        e.preventDefault()
        addTodo(todo);
        setFormData(INITIAL_FORM_STATE)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" placeholder="New Task" value={formData.todo} onChange={handleChange}/>
        </form>
    )
}

export default NewTodoForm;