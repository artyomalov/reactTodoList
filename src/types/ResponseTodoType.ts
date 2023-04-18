import { TodoType } from "./todoType"

type ResponseTodoType = {
  returnedTodo: TodoType;
  paginationData: {
    activeTodosCount: number;
    pagesCount: number;
    todosTotalCount: number;
  } 
}

export default ResponseTodoType