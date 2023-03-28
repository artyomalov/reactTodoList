import FilterItem from './FilterItem';

const Filter = (props) => {
  return (
    <div>
      {props.filterValues.map((filterValue, index) => (
        <FilterItem
          key={index} //можно ли в данном случае использовать индекс элемента в качестве ключа?
          setFilter={props.setFilter}
          filterValue={filterValue}
        />
      ))}
    </div>
  );
};

export default Filter;
