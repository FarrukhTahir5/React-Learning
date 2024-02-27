import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false }
  ]);  
  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id));
  }

  const addTodo = (text)=>{
    const newTodo ={
      id:todos.length+1,
      text,
      completed:false
    };
    setTodos([...todos,newTodo])
  }
  const toggleTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
  const editTodo=(id,newText)=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,text:newText}:todo))
  }
  return (
    <div className="App">
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      <AddTodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
