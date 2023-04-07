import { TodoType } from './todoType';

type TodosData = {
  filteredTodos: Array<TodoType>;
  activeTodosCounter: number;
  todosCounter: number;
  allTodosCompleted: boolean;
  someTodosCompleted: boolean;
  filter: string;
};

export type { TodosData };
