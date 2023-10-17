import React, { useState } from 'react';

function TodoItem({ todo, onEdit, onDelete, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim() !== '') {
      setIsEditing(false);
      onEdit(todo.id, editedText);
    }
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className='save-button' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="todo-details">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
          />
          <span className="todo-title">{todo.title}</span>
          <button onClick={handleEdit} className="edit-button">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
