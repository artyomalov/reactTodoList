import FilterItem from './FilterItem';

const Filter = ({ setFilter }) => {
  const filterValues = {
    all: 'all',
    active: 'active',
    completed: 'completed',
  };

  return (
    <div>
      <FilterItem setFilter={setFilter} value="active" />
      <FilterItem setFilter={setFilter} value="completed" />
      <FilterItem setFilter={setFilter} value="all" />
    </div>
  );
};

export default Filter;
