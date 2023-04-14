import http from './httpCommon';
import { TodoType, AddTodoType } from '../../types/todoType';
import TodoResponse from '../../types/todoResponse';


const addTodo = (data: AddTodoType) => {
  console.log(data);
  return http.post<TodoResponse>('/', data);
};

const getAllTodos =  (filterValue: string) => {
  return http.get<Array<TodoType>>(`?filterValue=${filterValue}`);
};

const updateTodo = (id: string, prop:string, value:string | boolean) => {
  return http.patch<TodoResponse>(`/${id}`, {prop, value});
};

const deleteTodo = (id: string) => {
  return http.delete<string>(`/${id}`);
};

const completeAllTodos = () => {
  return http.patch<boolean>('/');
};

const deleteAllCompletedTodos = () => {
  return http.delete('/');
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