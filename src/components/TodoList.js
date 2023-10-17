import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, filterCompleted, onEdit, onDelete, onToggleComplete }) {
  const filteredTodos = filterCompleted ? todos.filter(todo => todo.completed) : todos;

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
