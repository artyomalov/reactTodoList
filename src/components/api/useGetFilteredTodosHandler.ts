import { useAppDispatch } from '../../store/hooks';
import todoRequests from './requests';
import { getAllTodos } from '../../store/todoSlice';


export const useGetFilteredTodos = () => {
  
  const dispatch = useAppDispatch();
  
  const getFilteredTodos = async (filterValue: string) => {
    try {
      const response = await todoRequests.getAllTodos(filterValue);

      if (response.status !== 200) {
        throw new Error('Server error!');
      }
      dispatch(getAllTodos(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return getFilteredTodos;
};
