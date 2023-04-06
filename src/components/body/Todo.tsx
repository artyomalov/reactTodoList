import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateTodo, toggleTodoCompleted, deleteTodo } from '../../store/todoSlice';
import { todoType } from '../../types/todoType';
import styled from 'styled-components';
import commonStyles from '../commonStyles';

const TodoTodoContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid ${commonStyles.backgroundColor};
  padding: 3%;
`;

const TodoCompleteButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${commonStyles.backgroundColor};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`;


type todoCompletedType = {
  completed: boolean;
};

const TodoButtonCheckMark = styled.span<todoCompletedType>`
  display: inline-block;
  width: 9px;
  height: 9px;
  border: solid ${commonStyles.checkColor};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
  transition: ${commonStyles.transitionStyle};
  opacity: ${(props) => (props.completed ? '1' : '0')};
`;

const TodoTodoText = styled.p<todoCompletedType>`
  width: 80%;
  height: 30px;
  padding-top: 8px;
  text-align: start;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: ${props=>props.completed ? 'line-through' : 'none'};
`


const TodoEditTodoInput = styled.input`
  width: 80%;
  height: 30px;
  text-align: start;
`

type todoProps = {
  todo: todoType;
};


const deleteButtonProps = {
  top: '14px',
  right: '5px',
  crossColor: 'rgb(175, 0, 0)',
  crossWidth: '20px',
  crossHeight: '3px',
}

const TodoDeleteTodoButton = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: ${deleteButtonProps.crossWidth};
    height: ${deleteButtonProps.crossHeight};
    background-color: ${deleteButtonProps.crossColor};
    position: absolute;
    top: ${deleteButtonProps.top};
    right: ${deleteButtonProps.right};
    transition: ${commonStyles.transitionStyle};
  }
  &::after {
    transform: rotate(-45deg);
  }
  &::before {
    transform: rotate(45deg);
  }

  &:hover {
    &::before {
      transform: rotate(0deg);
    }
    &::after {
      transform: rotate(0deg);
    }
  }
`


const Todo: React.FC<todoProps> = (props: todoProps) => {
  const todo = props.todo;
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editInputData, setEditInputData] = React.useState<string>(todo.text);
  const dispatch = useAppDispatch();

  const toggleTodoCompletedHandler = () =>
    dispatch(toggleTodoCompleted(todo.id));

  const onBlurInputHandler = () => {
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    dispatch(updateTodo({ id: todo.id, text: editInputData }));
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
    dispatch(updateTodo({ id: todo.id, text: editInputData }));
    setEdit(false);
  };

  const setInputDataHandler = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setEditInputData(ev.target.value);
  const setEditHandler = () => setEdit(true);

  const deleteTodoHandler = () => dispatch(deleteTodo(todo.id));

  return (
    <TodoTodoContainer>
      <TodoCompleteButton onClick={toggleTodoCompletedHandler}>
        <TodoButtonCheckMark completed={todo.completed}></TodoButtonCheckMark>
      </TodoCompleteButton>
      {edit ? (
        <TodoEditTodoInput
          onChange={setInputDataHandler}
          onBlur={onBlurInputHandler}
          onKeyDown={onKeyDowmHandler}
          type="text"
          value={editInputData}
          autoFocus
        />
      ) : (
        <TodoTodoText
          completed = {todo.completed}
          onDoubleClick={setEditHandler}
        >
          {todo.text}
        </TodoTodoText>
      )}
      <TodoDeleteTodoButton
        onClick={deleteTodoHandler}
      ></TodoDeleteTodoButton>
    </TodoTodoContainer>
  );
};

export default Todo;
