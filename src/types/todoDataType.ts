import { todoType } from './todoType';

type todosData = {
  filteredTodos: Array<todoType>;
  activeTodosCounter: number;
  todosCounter: number;
  allTodosCompleted: boolean;
  someTodosCompleted: boolean;
  filter: string;
};

export type { todosData };
