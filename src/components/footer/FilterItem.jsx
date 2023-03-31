import styles from './FilterItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';
function FilterItem(props) {
  const dispatch = useDispatch();

  const todosData = useSelector(selectTodos);
  const selected = todosData.filter === props.filterValue;
  const setFilterHandler = () => {
    dispatch(setFilter(props.filterValue));
  };

  return (
    <p
      className={selected ? styles.filterItem_selected : styles.filterItem}
      onClick={setFilterHandler}
    >
      {props.filterValue}
    </p>
  );
}

export default FilterItem;
