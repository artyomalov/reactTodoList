import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.scss';
import { useAppSelector } from '../../store/hooks';
import selectTodos from '../../store/selectors';
import { todoType } from '../../types/todoType';

const Todos: React.FC = () => {
  const filteredTodosData = useAppSelector(selectTodos);

  return (
    <div className={styles.todoList}>
      {filteredTodosData.filteredTodos.map((todo: todoType) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
