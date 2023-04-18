import { TodoType } from "./todoType"

type GetRequestDataType = {
  todos: TodoType[];
  todosTotalCount: number;
  activeTodosCount: number;
  pagesCount: number;
  someTodosCompleted: boolean;
}

export default GetRequestDataType