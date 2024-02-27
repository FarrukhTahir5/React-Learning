import { useState } from "react";

export default function TodoItem({
  onDelete,
  id,
  text: initialText,
  completed,
  onToggle,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggle = () => {
    onToggle(id);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleInputChange=(e)=>{
    setText(e.target.value)
  }
  const handleSubmitEdit=()=>{
    setIsEditing(false);
    onEdit(id,text)
  }
  return (
    <>
      <div className="item">
        <div className="id">{id}</div>
        {isEditing ? <><input className="edit-input"
          type="text"
          value={text}
          onChange={handleInputChange}
          autoFocus
        />
        <button className="change-button" onClick={handleSubmitEdit}>Done</button>
        </> : <>
        <div className="taskName" onClick={handleToggle} style={{ textDecoration: completed ? 'line-through' : 'none' }}>{initialText}</div>
        <div className="status">
          <input type="checkbox" checked={completed} onChange={handleToggle} />
          {completed ? "Completed" : "Incomplete"}
        </div>
          <div className="edit" onClick={handleEdit}>Edit</div>
          <div className="remove" onClick={handleDelete}>Remove</div>
        </>}
      </div>
    </>
  );
}