import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentPage } from '../../store/todoSlice';
import StyledPageLinkVackForward from './PageLinkBackForward.style';

type PageLinkBackForwardType = {
  rotation: string;
  currentPage: number;
};

const PageLinkBackForward: React.FC<PageLinkBackForwardType> = (props) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.todos.currentPage);
  const pagesCount = useAppSelector((state) => state.todos.pagesCount);

  const changePageHandler = () => {
    let incrementDecrementSelector = props.rotation === 'right' ? 1 : -1;
    let setCurrentPageArg = currentPage + incrementDecrementSelector;

    if (setCurrentPageArg <= 0) {
      setCurrentPageArg = 1;
    }
    if (setCurrentPageArg >= pagesCount) {
      setCurrentPageArg = pagesCount;
    }

    dispatch(setCurrentPage(setCurrentPageArg));
  };

  return (
    <StyledPageLinkVackForward
      rotation={props.rotation}
      onClick={changePageHandler}
    >
      <span className = "arrow"></span>
    </StyledPageLinkVackForward>
  );
};

export default PageLinkBackForward;
