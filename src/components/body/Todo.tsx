import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  updateTodo,
  toggleTodoCompleted,
  deleteTodo,
  setCurrentPage,
} from '../../store/todoSlice';
import { TodoType } from '../../types/todoType';
import StyledTodoWrapper from './Todo.style';
import todoRequests from '../api/requests';
import { useGetFilteredTodos } from '../api/useGetFilteredTodosHandler';

const Todo: React.FC<{ todo: TodoType }> = (props) => {
  const { todo } = props;
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editInputData, setEditInputData] = React.useState<string>(todo.text);
  const getFilteredTodos = useGetFilteredTodos();
  const dispatch = useAppDispatch();
  const { todos, filter, currentPage, todosTotalCount } = useAppSelector(
    (state) => state.todos
  );

  const toggleTodoCompletedHandler = async () => {
    try {
      const response = await todoRequests.updateTodo(
        todo._id,
        'completed',
        todo.completed,
        currentPage,
        filter
      );
      if (response.status !== 200) {
        throw new Error('Server error');
      }
      dispatch(
        toggleTodoCompleted({
          _id: response.data.returnedTodo._id,
          completed: response.data.returnedTodo.completed,
          activeTodosCount: response.data.paginationData.activeTodosCount,
        })
      );
      if (filter !== 'all') {
        getFilteredTodos(filter, currentPage);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const todoUpdater = async (prop: string) => {
    try {
      const response = await todoRequests.updateTodo(
        todo._id,
        prop,
        editInputData,
        currentPage,
        filter
      );
      if (response.status !== 200) {
        throw new Error("Can't update todo. Server error");
      }
      dispatch(
        updateTodo({
          id: response.data.returnedTodo._id,
          text: response.data.returnedTodo.text,
        })
      );
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onBlurInputHandler = async () => {
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    todoUpdater('text');
  };

  const onKeyUpHandler = async (
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

  const setInputDataHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputData(ev.target.value);
  };

  const setEditHandler = () => setEdit(true);

  const deleteTodoHandler = async () => {
    try {
      const response = await todoRequests.deleteTodo(todo._id);
      if (response.status !== 200) {
        throw new Error('Server error');
      }
      dispatch(
        deleteTodo({
          _id: todo._id,
          pagesCount: response.data.pagesCount,
          activeTodosCount: response.data.activeTodosCount,
          todosTotalCount: response.data.todosTotalCount,
        })
      );
      if (todos.length < 6) {
        if (currentPage === 1 && todosTotalCount < 6) {
          return;
        }
        if (currentPage === response.data.pagesCount) {
          if (todos.length === 1) {
            dispatch(setCurrentPage(currentPage - 1));
          }
          return;
        }
        getFilteredTodos(filter, currentPage);
      }
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
          onKeyUp={onKeyUpHandler}
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
