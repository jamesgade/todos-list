import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem';

function App() {
  const [allTodos, setAllTodos] = useState();
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Laundry",
      isCompleted: false
    },
    {
      id: 2,
      text: "School",
      isCompleted: false
    },
    {
      id: 3,
      text: "Reading",
      isCompleted: true
    },
  ]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newTodoText.trim() === '') {
      alert('Text cannot be empty')
      return;
    }

    const newTodoItem = {
      id: Date.now(),
      text: newTodoText,
      isCompleted: false
    }

    setTodos((prevTodos) => [newTodoItem, ...prevTodos])
    setNewTodoText('');
  }

  const toggleStatus = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === todoId){
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  }

  const filterTodos = (category) => {
    if(category === 'all') {
      const updatedTodos = todos.sort((a , b) => a.id > b.id)
      console.log(updatedTodos);
      setTodos(todos);
    }
    if(category === 'completed'){
      const updatedTodos = todos.filter()
    }
    if(category === 'pending'){

    }
  }

  return (
    <>
      <h1>Todo List</h1>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0'}}>
        <div style={{display: 'flex'}}>
          <h4>Filters : </h4>
          <button onClick={() => filterTodos('all')}>All</button>
          <button onClick={() => filterTodos('completed')}>Completed</button>
          <button onClick={() => filterTodos('pending')}>Pending</button>
        </div>
        <div>
          <button onClick={() => setShowCreateForm(!showCreateForm)}>{showCreateForm ? 'Hide Form' : 'Create Todo'}</button>
        </div>
      </div>
      {showCreateForm && <div>
        <form onSubmit={handleSubmit}>
          <h3>Create Todo Form</h3>
          <div>
            <label>Todo Text : </label>
            <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
          </div>
          <div>
            <button type="submit">Add Todo</button>
          </div>
        </form>
        </div>}
      {todos.length > 0 ? (
        <div>
          <div>
            {todos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
            })}
          </div>
        </div>
      ) : <p>No Items Found</p>}
    </>
  )
}

export default App
