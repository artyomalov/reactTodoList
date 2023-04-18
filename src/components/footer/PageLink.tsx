import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { setCurrentPage } from '../../store/todoSlice';
import styled from 'styled-components';
import { useGetFilteredTodos } from '../api/useGetFilteredTodosHandler';

const StyledPageLink = styled.span<{ pageSelected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.pageSelected ? 'rgb(175, 0, 0)' : 'black')};
`;

const PageLink: React.FC<{ pageNumber: number }> = (props) => {

  const dispatch = useAppDispatch();

  const { currentPage, filter: filterValue } = useAppSelector(
    (state) => state.todos
  );
  const pageSelected = currentPage === props.pageNumber;
  const setPageHandler = () => {
    dispatch(setCurrentPage(props.pageNumber));
  };

  return (
    <StyledPageLink onClick={setPageHandler} pageSelected={pageSelected}>
      {props.pageNumber}
    </StyledPageLink>
  );
};

export default PageLink;
function getFilteredTodos(filterValue: any, currentPage: number) {
  throw new Error('Function not implemented.');
}
