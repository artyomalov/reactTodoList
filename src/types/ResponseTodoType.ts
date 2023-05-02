import { TodoType } from "./todoType"

type ResponseTodoType = {
  todos: TodoType;
  paginationData: {
    activeTodosCount: number;
    pagesCount: number;
    todosTotalCount: number;
  } 
}

export default ResponseTodoType