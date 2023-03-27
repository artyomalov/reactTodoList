import FilterItem from './FilterItem';

const Filter = ({ setFilter }) => {
  const filterValues = {
    all: 'all',
    active: 'active',
    completed: 'completed',
  };

  return (
    <div>
      <FilterItem setFilter={setFilter} value={filterValues.active} />
      <FilterItem setFilter={setFilter} value={filterValues.completed} />
      <FilterItem setFilter={setFilter} value={filterValues.all} />
    </div>
  );
};

export default Filter;
