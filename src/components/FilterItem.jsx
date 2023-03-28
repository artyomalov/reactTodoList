import React from 'react';

function FilterItem(props) {
  return (
    <button
      onClick={() => {
        props.setFilter(props.filterValue);
      }}
    >
      {props.filterValue}
    </button>
  );
}

export default FilterItem;
