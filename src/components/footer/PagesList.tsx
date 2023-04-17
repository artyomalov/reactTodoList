import React from 'react';
import PageLink from './PageLink';
import { useAppSelector } from '../../store/hooks';
import StyledPagesList from './PagesList.style';

const PagesList: React.FC = () => {
  const pagesCount = useAppSelector((state) => state.todos.pagesCount);
  const filterValue = useAppSelector((state) => state.todos.filter);
  const pagesList: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesList.push(i);
  }

  return (
    <StyledPagesList>
      {Boolean(pagesList.length)
        ? pagesList.map((pageNumber) => {
            return <PageLink key={pageNumber} pageNumber={pageNumber} />;
          })
        : `no ${filterValue} todos`}
      {}
    </StyledPagesList>
  );
};

export default PagesList;
