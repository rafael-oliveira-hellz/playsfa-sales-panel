import React from 'react';
import * as Styled from './styles';
import LoadingGif from '../../assets/loading/obito-uchiha.gif';

interface IProps {
  className?: string;
}
export const MainLoading = ({ className }: IProps) => {
  return (
    <>
      <Styled.LoadingWrapper className={className}>
        <img src={LoadingGif} className={className} alt='Loading Gif' />
      </Styled.LoadingWrapper>
    </>
  );
};
