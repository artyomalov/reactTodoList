import http from './httpCommon';
import { TodoType, AddTodoType } from '../../types/todoType';
import GetRequestDataType from '../../types/getRequestDataType';
import ResponseTodoType from '../../types/ResponseTodoType';

const addTodo = (data: AddTodoType) => {
  return http.post<ResponseTodoType>('/', data);
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
  return http.delete<number>(`/${id}`);
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
