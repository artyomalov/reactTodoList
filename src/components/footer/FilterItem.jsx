import styles from './FilterItem.module.scss';

function FilterItem(props) {
  const selected = props.filter === props.filterValue;

  return (
    <p
      className={selected ? styles.filterItem_selected : styles.filterItem}
      onClick={() => {
        props.setFilter(props.filterValue);
      }}
    >
      {props.filterValue}
    </p>
  );
}

export default FilterItem;
