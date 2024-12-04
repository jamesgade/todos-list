const TodoItem = ({todo, toggleStatus, deleteTodo}) => {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: todo.isCompleted ? 'green' : '#FFF',
            color: todo.isCompleted ? '#fff' : '#000',
            border: '1px solid black',
            margin: '10px 0'
        }}>
        <h3>Title: {todo.text}</h3>
        <button 
        onClick={() => toggleStatus(todo.id)}>Toggle Status</button>
        <button onClick={() => deleteTodo(todo.id)} >Delete</button>
        </div>
    )
}

export default TodoItem;
