import React from 'react';
import * as Styled from './styles';
import LoadingGif from '../../pages/assets/loading/obito-uchiha.gif';
import Image from 'next/image';

interface IProps {
  className?: string;
}
export const MainLoading = ({ className }: IProps) => {
  return (
    <>
      <Styled.LoadingWrapper className={className}>
        <Image src={LoadingGif} className={className} alt='Loading Gif' />
      </Styled.LoadingWrapper>
    </>
  );
};
