import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import {
  updateTodo,
  toggleTodoCompleted,
  deleteTodo,
} from '../../store/todoSlice';
import { TodoType } from '../../types/todoType';
import StyledTodoWrapper from './Todo.style';
import todoRequests from '../api/requests';

type TodoProps = {
  todo: TodoType;
};

const Todo: React.FC<TodoProps> = (props) => {
  const { todo } = props;
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editInputData, setEditInputData] = React.useState<string>(todo.text);
  const dispatch = useAppDispatch();

  const toggleTodoCompletedHandler = async () => {
    try {
      const response = await todoRequests.updateTodo(
        todo._id,
        'completed',
        todo.completed
      );
      if (response.status !== 200) {
        throw new Error('Server error');
      }
      dispatch(
        toggleTodoCompleted({
          _id: response.data._id,
          completed: response.data.completed,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const todoUpdater = async (prop:string) => {
    try {
      const response = await todoRequests.updateTodo(
        todo._id,
        prop,
        editInputData
      );
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Can't update todo. Server error");
      }
      dispatch(updateTodo({ id: response.data._id, text: response.data.text }));
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  }

  const onBlurInputHandler = async () => {
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    todoUpdater('text');
  };

  const onKeyDowmHandler = async (
    ev: React.KeyboardEvent<HTMLInputElement>
  ) => {
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
    todoUpdater('text');
  };

  const setInputDataHandler = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setEditInputData(ev.target.value);

  const setEditHandler = () => setEdit(true);

  const deleteTodoHandler = async () => {
    try {
      const response = await todoRequests.deleteTodo(todo._id);
      if (response.status !== 200) {
        throw new Error('Server error');
      }
      dispatch(deleteTodo(todo._id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledTodoWrapper isCompleted={todo.completed}>
      <button className="complete-button" onClick={toggleTodoCompletedHandler}>
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
        <p className="todo-text" onDoubleClick={setEditHandler}>
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
