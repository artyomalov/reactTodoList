import React from 'react';
import FilterItem from './FilterItem';
import styled from 'styled-components';

const FilterFilterContainer = styled.div`
  width: 30%;
  height: 18px;
  @media (max-width: ${props=>props.theme.mediaMaxWidth}) {
    width: 100%;
    height: 30px;
    border-top: 2px solid ${props=>props.theme.backgroundColor};
    padding-top: 10px;
    padding-left: 3%;
    margin-bottom: 10px;
  }
`;

const FilterFilter = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${props=>props.theme.mediaMaxWidth}) {
    margin: 0 0;
    width: 50%;
  }
`;

const filterValues: Array<string> = ['all', 'active', 'completed'];

const Filter: React.FC = () => {
  return (
    <FilterFilterContainer>
      <FilterFilter>
        {filterValues.map((filterValue: string, index) => (
          <FilterItem key={index} filterValue={filterValue} />
        ))}
      </FilterFilter>
    </FilterFilterContainer>
  );
};

export default Filter;
