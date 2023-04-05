import React from 'react';
import styled from 'styled-components';
import commonStyles from '../commonStyles';

const TodoCounterCounter = styled.div`
  width: 90px;
  height: 18px;
  vertical-align: middle;

  @media (max-width: ${commonStyles.mediaMaxWidth}) {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 3%;
  }
`;

type todoCounterProps = {
  activeTodosCounter: number;
};

const TodoCounter: React.FC<todoCounterProps> = (props: todoCounterProps) => {
  const itemEnding: string = props.activeTodosCounter === 1 ? 'item' : 'items';

  return (
    <TodoCounterCounter>
      {props.activeTodosCounter} {itemEnding} left
    </TodoCounterCounter>
  );
};

export default TodoCounter;
