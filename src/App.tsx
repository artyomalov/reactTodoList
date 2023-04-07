import React from 'react';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';
import TodoFooter from './components/footer/TodoFooter';
import StyledAppContainer from './App.style';



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
