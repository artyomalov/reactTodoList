import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addTodo } from '../../store/todoSlice';
import StyledInputForm from './TodoHeaderInput.style';
import todoRequests from '../api/requests';


const Input: React.FC = () => {
  const [text, setText] = React.useState('');
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { currentPage, filter } = useAppSelector(state=>state.todos)
  React.useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  });

  const addTodoHandler = async () => {
    if (!text.trim()) {
      return;
    }
    try {
      const response = await todoRequests.addTodo( text, filter, currentPage );
      if (response.status !== 200) {
        throw new Error('Server error');
      }
      setText('');
      dispatch(
        addTodo({
          _id: response.data.todos._id,
          text: response.data.todos.text,
          completed: response.data.todos.completed,
          activeTodosCount: response.data.paginationData.activeTodosCount,
          todosTotalCount: response.data.paginationData.todosTotalCount,
          pagesCount: response.data.paginationData.pagesCount
        })
        );
    } catch (err) {
      console.log(err);
    }
  };

  const addTodoHandlerForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addTodoHandler();
  };

  const addTodoHandlerInput = () => {
    addTodoHandler();
  };

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };

  return (
    <StyledInputForm onSubmit={addTodoHandlerForm}>
      <input
        className="input-todo"
        ref={inputRef}
        onChange={onChangeHandler}
        onBlur={addTodoHandlerInput}
        value={text}
        placeholder="What needs to be done"
      />
    </StyledInputForm>
  );
};

export default Input;
