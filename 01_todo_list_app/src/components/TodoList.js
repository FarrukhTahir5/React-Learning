import TodoItem from "./TodoItem";
export default function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  const handleToggle = (id) => {
    toggleTodo(id);
  };
  const handleEdit = (id, text) => {
    editTodo(id, text);
  };
  return (
    <div className="todo-list">
      <div className="header">
        <h1 className="Heading">Todo List App</h1>
        
      </div>
      {todos.map((todo) => (
        <TodoItem
          onDelete={handleDelete}
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}
