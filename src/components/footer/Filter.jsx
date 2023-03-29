import FilterItem from './FilterItem';
import styles from './Filter.module.scss';

const Filter = (props) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filter}>
        {props.filterValues.map((filterValue, index) => (
          <FilterItem
            key={index} //можно ли в данном случае использовать индекс элемента в качестве ключа?
            setFilter={props.setFilter}
            filter={props.filter}
            filterValue={filterValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
