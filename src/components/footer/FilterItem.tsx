import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setFilter } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';
import StyledFilterElement from './FilterItem.style';


type FilterProps = {
  filterValue: string;
};

const FilterItem: React.FC<FilterProps> = (props) => {
  const dispatch = useAppDispatch();

  const todosData = useAppSelector(selectTodos);
  const selected = todosData.filter === props.filterValue;
  const setFilterHandler = () => {
    dispatch(setFilter(props.filterValue));
  };

  return (
    <StyledFilterElement selected={selected} onClick={setFilterHandler}>
      {props.filterValue}
    </StyledFilterElement>
  );
};

export default FilterItem;
