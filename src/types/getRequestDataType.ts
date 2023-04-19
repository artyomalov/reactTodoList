import { TodoType } from './todoType';

type GetRequestDataType = {
  todos: TodoType[];
  paginationData: {
    todosTotalCount: number;
    activeTodosCount: number;
    pagesCount: number;
    someTodosCompleted: boolean;
  };
};


export default GetRequestDataType;
