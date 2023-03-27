import { useState } from 'react';

const Todo = ({ todoData }) => {
  const { id, text, completed, deleteTodo, updateTodo, toggleTodoCompleted } =
    todoData;
  const [edit, setEdit] = useState(false);
  const [editInputData, setEditInputData] = useState(text);
  return (
    <div>
      <button onClick={() => toggleTodoCompleted(id)}>
        {completed ? 'completed' : 'active'}
      </button>
      {edit ? (
        <input
          onChange={(e) => setEditInputData(e.target.value)}
          onBlur={() => {
            updateTodo(id, editInputData);
            setEdit(false);
          }}
          type="text"
          value={editInputData}
        />
      ) : (
        <p onDoubleClick={() => setEdit(true)}>{text}</p>
      )}
      <button onClick={() => deleteTodo(id)}>del</button>
    </div>
  );
};

export default Todo;
