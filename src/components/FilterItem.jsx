import React from 'react';

function FilterItem({ setFilter, value }) {
  return (
    <button
      onClick={() => {
        setFilter(value);
      }}
    >
      {value}
    </button>
  );
}

export default FilterItem;
