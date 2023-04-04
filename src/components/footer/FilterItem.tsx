import React from 'react';
import styles from './FilterItem.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { setFilter } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';

type filterProps = {
  filterValue: string;
};

const FilterItem: React.FC<filterProps> = (props: filterProps) => {
  const dispatch = useAppDispatch();

  const todosData = useAppSelector(selectTodos);
  const selected = todosData.filter === props.filterValue;
  const setFilterHandler = () => {
    dispatch(setFilter(props.filterValue));
  };

  return (
    <p
      className={selected ? styles.filterItem_selected : styles.filterItem}
      onClick={setFilterHandler}
    >
      {props.filterValue}
    </p>
  );
};

export default FilterItem;
