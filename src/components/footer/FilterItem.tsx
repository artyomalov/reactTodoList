import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setFilter } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';
import styled from 'styled-components';
import commonStyles from '../commonStyles';

type FitlerItmeElementType = {
  selected: boolean;
};

const FilterItemElement = styled.p<FitlerItmeElementType>`
  display: inline-block;
  height: 18px;
  background: none;
  border: none;
  transition: ${commonStyles.transitionStyle};
  cursor: ${(props) => (props.selected ? 'not-allowed' : 'pointer')};
  outline: ${(props) =>
    props.selected ? `2px solid ${commonStyles.checkColor}` : ''};
  outline-offset: ${(props) => (props.selected ? '2px' : '')};

  &:hover {
    outline: 2px solid rgb(222, 226, 222);
    outline-offset: 2px;
  }
`;

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
    <FilterItemElement selected={selected} onClick={setFilterHandler}>
      {props.filterValue}
    </FilterItemElement>
  );
};

export default FilterItem;
