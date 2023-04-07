import React from 'react';
import FilterItem from './FilterItem';
import StyledFilterContainer from './Filter.style';

const filterValues: Array<string> = ['all', 'active', 'completed'];

const Filter: React.FC = () => {
  return (
    <StyledFilterContainer>
      <div className="filter-block ">
        {filterValues.map((filterValue: string, index) => {
          return <FilterItem key={index} filterValue={filterValue} />;
        })}
      </div>
    </StyledFilterContainer>
  );
};

export default Filter;
