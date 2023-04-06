import React from 'react';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';
import TodoFooter from './components/footer/TodoFooter';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </AppContainer>
  );
};

export default App;
