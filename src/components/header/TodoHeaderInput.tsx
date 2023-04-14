import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from '../../store/todoSlice';
import { TodoType } from '../../types/todoType';
import StyledInputForm from './TodoHeaderInput.style';
import todoRequests from '../api/requests';

const Input: React.FC = () => {
  const [text, setText] = React.useState('');
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

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
      const response = await todoRequests.addTodo({text});
      if (response.status === 404) {
        throw new Error('Server error');
      }
      const newTodo: TodoType = {
        _id: response.data._id,
        text: response.data.text,
        completed: response.data.completed,
      };
      dispatch(addTodo(newTodo));
      setText('');
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
