import styled from "styled-components";


const StyledTodoHeaderWrapper = styled.div`
  max-width: ${props => props.theme.containerWidth};
  width: 100%;
  height: 150px;
  background-color: ${props => props.theme.containerColor};
  margin-top: 30px;

  .todo-header {
    padding-top: 30px;
    text-align: center;
  }

  @media ${props => props.theme.media} {
    .todo-header {
      margin-top: 0;
    }
  }

  .todo-body {margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;}

`;

export default StyledTodoHeaderWrapper