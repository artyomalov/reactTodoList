import { useState } from 'react';
import styles from './todoList.module.scss';
const Todo = ({
  todoId,
  todoText,
  todoCompleted,
  deleteTodo,
  toggleTodoCompleted,
  updateTodo,
}) => {
  const [edit, setEdit] = useState(false);
  const [editInputData, setEditInputData] = useState(todoText);
  const onBlurInputHandler = () => {
    updateTodo(todoId, editInputData);
    setEdit(false);
  };

  return (
    <div className={styles.todoContainer}>
      <button onClick={() => toggleTodoCompleted(todoId)}>&#10003;</button>
      {edit ? (
        <input
          onChange={(e) => setEditInputData(e.target.value)}
          onBlur={onBlurInputHandler}
          type="text"
          value={editInputData}
        />
      ) : (
        <p onDoubleClick={() => setEdit(true)}>{todoText}</p>
      )}
      <button onClick={() => deleteTodo(todoId)}> &#10008;</button>
    </div>
  );
};

export default Todo;
