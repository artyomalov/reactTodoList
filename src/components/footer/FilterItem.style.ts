import styled, {css} from "styled-components";

type StyledFilterElementType = {
  selected: boolean;
};

const selectedCss = css`
  outline: 2px solid ${p => p.theme.checkColor};
  outline-offset: 2px;
  cursor: not-allowed;
`

const StyledFilterElement = styled.button<StyledFilterElementType>`
  display: inline-block;
  height: 18px;
  background: none;
  border: none;
  transition: ${props => props.theme.transitionStyle};
  cursor: pointer;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
  ${props => props.selected ? selectedCss : css`
  `}


  &:hover {
    outline: 2px solid rgb(222, 226, 222);
    outline-offset: 2px;
  }
`;

export default StyledFilterElement