import http from './httpCommon';
import { TodoType } from '../../types/todoType';
import RequestType from '../../types/requestDataType';

const addTodo = async (text:string) => {
  return await http.post<string>('/', text);
};

const getAllTodos = async () => {
  return await http.get<Array<TodoType>>('/');
};

const updateTodo = async (id: string, data: RequestType) => {
  return await http.patch<string, RequestType>(`/${id}`, data);
};

const deleteTodo = async (id: string) => {
  return await http.delete<string>(`/${id}`);
};

const completeAllTodos = async () => {
  return await http.patch('/');
};

const deleteAllCompletedTodos = async () => {
  return await http.delete('/');
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