import styled from 'styled-components';

const StyledPageLinkVackForward = styled.div<{ rotation: string }>`
  width: 15px;
  height: 15px;
  cursor: pointer;
  opacity: 0.4;
  transition: ${(props) => props.theme.transitionStyle};

  .arrow {
    display: inline-block;
    width: 9px;
    height: 9px;
    border: solid ${(props) => props.theme.checkColor};
    border-width: 0 2px 2px 0;
    transform: rotate(
      ${(props) => (props.rotation === 'left' ? '135deg' : '-45deg')}
    );
    margin-bottom: 2px;
  }

  &:hover {
    opacity: 1;
  }
`;

export default StyledPageLinkVackForward;
