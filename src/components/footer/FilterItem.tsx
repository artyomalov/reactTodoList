import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setFilter } from '../../store/todoSlice';
import StyledFilterElement from './FilterItem.style';
import { useGetFilteredTodos } from '../api/useGetFilteredTodosHandler';

type FilterProps = {
  filterValue: string;
  currentPage: number;
};

const FilterItem: React.FC<FilterProps> = (props) => {
  const filterValue = useAppSelector((state) => state.todos.filter);
  const getFilteredTodos = useGetFilteredTodos();
  const dispatch = useAppDispatch();
  const selected = filterValue === props.filterValue;

  const setFilterHandler = () => {
    getFilteredTodos(props.filterValue, props.currentPage);
    dispatch(setFilter(props.filterValue));
  };

  return (
    <StyledFilterElement selected={selected} onClick={setFilterHandler}>
      {props.filterValue}
    </StyledFilterElement>
  );
};

export default FilterItem;
