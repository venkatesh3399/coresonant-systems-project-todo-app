import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTodo = {
        userId: 1,
        id: todos.length + 1,
        title: newTask,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  const handleFilter = () => {
    setFilterCompleted(!filterCompleted);
  };

  const handleEdit = (taskId, updatedText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === taskId) {
        return { ...todo, title: updatedText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (taskId) => {
    const updatedTodos = todos.filter(todo => todo.id !== taskId);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === taskId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='add-button' onClick={addTask}>Add</button>
      </div>
      <button className='filter-button' onClick={handleFilter}>
        {filterCompleted ? 'Show All' : 'Show Completed'}
      </button>
      <TodoList
        todos={todos}
        filterCompleted={filterCompleted}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default TodoApp;
