import React from 'react';
import FilterItem from './FilterItem';
import StyledFilterContainer from './Filter.style';
import { useAppSelector } from '../../store/hooks';

const filterValues: Array<string> = ['all', 'active', 'completed'];

const Filter: React.FC = () => {

  const currentPage = useAppSelector((state) => state.todos.currentPage);

  return (
    <StyledFilterContainer>
      <div className="filter-block ">
        {filterValues.map((filterValue: string, index) => {
          return <FilterItem key={index} filterValue={filterValue} currentPage = {currentPage} />;
        })}
      </div>
    </StyledFilterContainer>
  );
};

export default Filter;
