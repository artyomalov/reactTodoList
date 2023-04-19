import { TodoType } from "./todoType";

type CompleteAllTodosTogglerType = {
  todos: TodoType[];
  paginationData: {
    todosTotalCount: number;
    activeTodosCount: number;
    pagesCount: number;
    someTodosCompleted: boolean;
    completed: boolean;
  }
}

export default CompleteAllTodosTogglerType