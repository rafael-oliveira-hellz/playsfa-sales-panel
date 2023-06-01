import React from 'react';
import * as Styled from './styles';
import Loading from '../../pages/assets/loading/goku.gif';
import Image from 'next/image';

interface IProps {
  className?: string;
}
export const UserLoading = ({ className }: IProps) => {
  return (
    <>
      <Styled.UserLoadingWrapper className={className}>
        <Image src={Loading} className={className} alt='Loading Gif' />
      </Styled.UserLoadingWrapper>
    </>
  );
};
