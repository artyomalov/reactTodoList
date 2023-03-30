import FilterItem from './FilterItem';
import styles from './Filter.module.scss';

const filterValues = ['all', 'active', 'completed'];

const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filter}>
        {filterValues.map((filterValue, index) => (
          <FilterItem key={index} filterValue={filterValue} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
