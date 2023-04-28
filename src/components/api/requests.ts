import http from './httpCommon';
import GetRequestDataType from '../../types/getRequestDataType';
import ResponseTodoType from '../../types/ResponseTodoType';
import CompleteAllTodosTogglerType from '../../types/CompleteAllTodosTogglerType';

const addTodo = (text: string, filter: string, currentPage: number) => {

  return http.post<ResponseTodoType>(
    `?filterValue=${filter}&pageNumber=${currentPage}`, { text }
  );
};

const getAllTodos = (filterValue: string, pageNumber: number) => {
  return http.get<GetRequestDataType>(
    `?filterValue=${filterValue}&pageNumber=${pageNumber}`
  );
};

const updateTodo = (
  id: string,
  prop: string,
  value: string | boolean,
  pageNumber: number,
  filterValue: string
) => {
  return http.patch<ResponseTodoType>(
    `/${id}?filterValue=${filterValue}&pageNumber=${pageNumber}`,
    { prop, value }
  );
};

const deleteTodo = (id: string) => {
  return http.delete<{
    pagesCount: number;
    activeTodosCount: number;
    todosTotalCount: number;
  }>(`/${id}`);
};

const completeAllTodos = (filterValue: string) => {
  return http.patch<CompleteAllTodosTogglerType>(`?filterValue=${filterValue}`);
};

const deleteAllCompletedTodos = (filterValue: string) => {
  return http.delete<GetRequestDataType>(`?filterValue=${filterValue}`);
};

const todoRequests = {
  addTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  completeAllTodos,
  deleteAllCompletedTodos,
};

export default todoRequests;
