import styles from './FilterItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterSlice';
import selectTodos from '../../store/selectors';
function FilterItem(props) {
  const dispatch = useDispatch();

  const filter = useSelector(selectTodos);
  const selected = filter === props.filterValue;

  return (
    <p
      className={selected ? styles.filterItem_selected : styles.filterItem}
      onClick={() => {
        console.log('click');
        dispatch(setFilter(props.filterValue));
      }}
    >
      {props.filterValue}
    </p>
  );
}

export default FilterItem;
