import http from './httpCommon';
import GetRequestDataType from '../../types/getRequestDataType';
import ResponseTodoType from '../../types/ResponseTodoType';

const addTodo = (data: string, filter: string, currentPage: number) => {
  return http.post<ResponseTodoType>(
    `?filterValue=${filter}&pageNumber=${currentPage}`,
    { data }
  );
};

const getAllTodos = (filterValue: string, pageNumber: number) => {
  return http.get<GetRequestDataType>(
    `?filterValue=${filterValue}&pageNumber=${pageNumber}`
  );
};

const updateTodo = (id: string, prop: string, value: string | boolean) => {
  return http.patch<ResponseTodoType>(`/${id}`, { prop, value });
};

const deleteTodo = (id: string) => {
  return http.delete<{
    pagesCount: number;
    activeTodosCount: number;
    todosTotalCount: number;
  }>(`/${id}`);
};

const completeAllTodos = () => {
  return http.patch<{ completed: boolean; activeTodosCount: number }>('/');
};

const deleteAllCompletedTodos = () => {
  return http.delete<{ todosTotalCount: number; activeTodosCount: number }>(
    '/'
  );
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
