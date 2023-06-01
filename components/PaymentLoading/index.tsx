import React from 'react';
import * as Styled from './styles';
import Loading from '../../assets/loading/deathnote1.gif';
import Image from 'next/image';
interface IProps {
  className?: string;
}
export const PaymentLoading = ({ className }: IProps) => {
  return (
    <>
      <Styled.PaymentLoadingWrapper className={className}>
        <Image src={Loading} className={className} alt='Loading Gif' />
      </Styled.PaymentLoadingWrapper>
    </>
  );
};
