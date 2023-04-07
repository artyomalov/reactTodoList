import styled from "styled-components";

const StyledTodoList = styled.div`
  max-width: ${props => props.theme.containerWidth};
  width: 100%;
  background-color: ${props => props.theme.containerColor};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledTodoList