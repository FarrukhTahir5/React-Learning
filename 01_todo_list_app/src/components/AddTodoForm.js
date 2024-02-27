import { useState } from "react";
export default function AddTodoForm({addTodo}) {
    const [text, setText] = useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!text.trim()) return;
        addTodo(text);
        setText('')
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Add a new Todo" className="input-task"/>
            <button className="button-task" type="submit">Submit</button>
        </form>
        </>
    )
}