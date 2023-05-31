import React from 'react';
import * as Styled from './styles';
import Loading from '../../assets/loading/goku.gif';
interface IProps {
  className?: string;
}
export const UserLoading = ({ className }: IProps) => {
  return (
    <>
      <Styled.UserLoadingWrapper className={className}>
        <img src={Loading} className={className} alt='Loading Gif' />
      </Styled.UserLoadingWrapper>
    </>
  );
};
