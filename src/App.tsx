import React from 'react';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';
import StyledAppContainer from './App.style';
import TodoFooter from './components/footer/TodoFooter';

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
