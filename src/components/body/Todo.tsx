import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateTodo, toggleTodoCompleted, deleteTodo } from '../../store/todoSlice';
import { TodoType } from '../../types/todoType';
import StyledTodoWrapper from './Todo.style';

type TodoProps = {
  todo: TodoType;
};

const Todo: React.FC<TodoProps> = (props) => {
  const {todo} = props;
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editInputData, setEditInputData] = React.useState<string>(todo.text);
  const dispatch = useAppDispatch();

  const toggleTodoCompletedHandler = () =>
    dispatch(toggleTodoCompleted(todo._id));

  const onBlurInputHandler = () => {
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    dispatch(updateTodo({ id: todo._id, text: editInputData }));
    setEdit(false);
  };

  const onKeyDowmHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.code === 'Escape') {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    if (ev.code !== 'Enter' && ev.code !== 'NumpadEnter') {
      return;
    }
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    dispatch(updateTodo({ id: todo._id, text: editInputData }));
    setEdit(false);
  };

  const setInputDataHandler = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setEditInputData(ev.target.value);

  const setEditHandler = () => setEdit(true);

  const deleteTodoHandler = () => dispatch(deleteTodo(todo._id));

  return (
    <StyledTodoWrapper isCompleted={todo.completed}>
      <button className = "complete-button" onClick={toggleTodoCompletedHandler} >
        <span className="complete-button-check"></span>
      </button>
     
      {edit ? (
        <input
          className="edit-todo-input"
          onChange={setInputDataHandler}
          onBlur={onBlurInputHandler}
          onKeyDown={onKeyDowmHandler}
          value={editInputData}
          autoFocus
        />
      ) : (
        <p className = "todo-text"
          onDoubleClick={setEditHandler}
        >
          {todo.text}
        </p>
      )}
      
      <button
        className="delete-todo-button"
        onClick={deleteTodoHandler}
      ></button>
    </StyledTodoWrapper>
  );
};

export default Todo;
