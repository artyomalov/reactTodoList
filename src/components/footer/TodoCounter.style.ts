import styled from "styled-components";

const StyledTodoCounter = styled.div`
  width: 90px;
  height: 18px;
  vertical-align: middle;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;

  @media ${props=>props.theme.media} {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 3%;
  }
`;

export default StyledTodoCounter