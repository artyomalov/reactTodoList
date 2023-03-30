import styles from './FilterItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterSlice';
function FilterItem(props) {
  const dispatch = useDispatch();

  const filter = useSelector(state.filter.filter);
  const selected = filter === props.filterValue;

  return (
    <p
      className={selected ? styles.filterItem_selected : styles.filterItem}
      onClick={() => {
        dispatch(setFilter(props.filterValue));
      }}
    >
      {props.filterValue}
    </p>
  );
}

export default FilterItem;
