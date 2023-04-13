import React from 'react';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';
import TodoFooter from './components/footer/TodoFooter';
import StyledAppContainer from './App.style';
// import todoRequests from './components/api/requests';
// import { useAppDispatch } from './store/hooks';
// import { getAllTodos } from './store/todoSlice';
// import { TodoType } from './types/todoType';
const App: React.FC = () => {



  return (
    <StyledAppContainer>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </StyledAppContainer>
  );
};

export default App;
