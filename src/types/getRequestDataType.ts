import { TodoType } from "./todoType"

type GetRequestDataType = {
  todos: Array<TodoType>;
  todosTotalCount: number;
  activeTodosCount: number;
  pagesCount: number;
  someTodosCompleted: boolean;
}

export default GetRequestDataType