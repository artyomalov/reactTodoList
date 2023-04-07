import styled from 'styled-components';

const deleteButtonProps = {
  top: '14px',
  right: '5px',
  crossColor: 'rgb(175, 0, 0)',
  crossWidth: '20px',
  crossHeight: '3px',
}

type StylesProps = {
  isCompleted: boolean;
}

const StyledTodoWrapper = styled.div<StylesProps>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid ${props=>props.theme.backgroundColor};
  padding: 3%;

  .complete-checkbox {
    display: none;
    z-index: 999;
    
  }

  .complete-button {
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid ${props=>props.theme.backgroundColor};
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
  }

  .complete-button-check {display: inline-block;
    width: 9px;
    height: 9px;
    border: solid ${props=>props.theme.checkColor};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
    transition: ${props=>props.theme.transitionStyle};
    opacity: ${(props) => (props.isCompleted ? '1' : '0')};
    cursor: pointer;
  }

  .todo-text {
    width: 80%;
    height: 30px;
    padding-top: 8px;
    text-align: start;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: ${props=>props.isCompleted ? 'line-through' : 'none'};
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
}

  .edit-todo-input {
      width: 80%;
      height: 30px;
      text-align: start;
    }

  .delete-todo-button {
    background: none;
    border: none;
    top: '14px';
    right: '5px';
    background-color: 'rgb(175, 0, 0)';
    width: '20px';
    height: '3px';
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: ${deleteButtonProps.crossWidth};
      height: ${deleteButtonProps.crossHeight};
      background-color: ${deleteButtonProps.crossColor};
      position: absolute;
      top: ${deleteButtonProps.top};
      right: ${deleteButtonProps.right};
      transition: ${props=>props.theme.transitionStyle};
    }
    &::after {
      transform: rotate(-45deg);
    }
    &::before {
      transform: rotate(45deg);
    }

    &:hover {
      &::before {
        transform: rotate(0deg);
      }
      &::after {
        transform: rotate(0deg);
      }
    }
  }
  `;

export default StyledTodoWrapper