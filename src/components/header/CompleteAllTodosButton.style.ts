import styled from "styled-components";

type StyledСompleteAllTodosButtonWrapper = {
  buttonEnabled: boolean;
};

const StyledСompleteAllTodosButtonWrapper = styled.div<StyledСompleteAllTodosButtonWrapper>`
  width: 20px;
  height: 20px;
  border: none;
  text-align: center;
  cursor: pointer;

  .complete-checkbox {
    display: none;
  }

  .complete-label {
    display: inline-block;
    width: 9px;
    height: 9px;
    border: solid ${props => props.theme.checkColor};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
    opacity: ${(props) => (props.buttonEnabled ? 1 : 0.4)};
    transition: ${props => props.theme.transitionStyle};
    cursor: pointer;
  }

  &:hover .complete-label {
      opacity: 1;
    }
`;

const StyledEmpty = styled.div`
  width: 20px;
  height: 20px;
  border: none;
  text-align: center;
`;

export {StyledСompleteAllTodosButtonWrapper, StyledEmpty}
