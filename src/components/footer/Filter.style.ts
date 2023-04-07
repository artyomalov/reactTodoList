import styled from "styled-components";

const StyledFilterContainer = styled.div`
  width: 30%;
  height: 18px;
  @media ${(props) => props.theme.media} {
    width: 100%;
    height: 30px;
    border-top: 2px solid ${(props) => props.theme.backgroundColor};
    padding-top: 10px;
    padding-left: 3%;
    padding-right: 3%;
    margin-bottom: 10px;
  }
  .filter-block {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${(props) => props.theme.media}) {
      margin: 0 0;
      width: 50%;
    }
  }
`;

export default StyledFilterContainer