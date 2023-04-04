import React from 'react';
import FilterItem from './FilterItem';
import styles from './Filter.module.scss';
const filterValues: Array<string> = ['all', 'active', 'completed'];

const Filter: React.FC = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filter}>
        {filterValues.map((filterValue: string, index) => (
          <FilterItem key={index} filterValue={filterValue} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
