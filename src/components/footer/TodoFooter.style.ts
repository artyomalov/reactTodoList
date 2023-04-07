import styled, { css } from 'styled-components';


type StyledTodoFooterContainerType = {
  haveTodos: boolean;
  haveCompletedTodos: boolean;
};

const TodoFooterContainer = styled.div<StyledTodoFooterContainerType>`
  display: ${(props) => (props.haveTodos ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${(props) => props.theme.containerWidth};
  height: 50px;
  background-color: ${(props) => props.theme.containerColor};
  border-top: 2px solid ${(props) => props.theme.backgroundColor};
  padding: 3%;
  @media ${(props) => props.theme.media} {
    display: ${(props) => (props.haveTodos ? 'flex' : 'none')};
    flex-direction: column;
    height: fit-content;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
    position: relative;
  }

  .completed-remover {
    display: inline-block;
    height: 18px;
    background: none;
    border: none;
    transition: ${(props) => props.theme.transitionStyle};
    cursor: pointer;
    opacity: ${(props) => (props.haveCompletedTodos ? 1 : 0)};
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    &:hover {
      color: rgb(175, 0, 0);
    }
    @media ${(props) => props.theme.media} {
      width: 100%;
      height: 42px;
      border-top: 2px solid ${(props) => props.theme.backgroundColor};
      margin-bottom: 10px;
      padding-top: 10px;
      padding-left: 3%;
      position: absolute;
      z-index: -1;
      background-color: ${(props) => props.theme.containerColor};
      bottom: ${(props) => (props.haveCompletedTodos ? '-52px' : 0)};
    }
  }
`;

export default TodoFooterContainer