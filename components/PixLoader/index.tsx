import React from "react";
import * as Styled from "./styles";
import Image from "next/image";
import gif from "../../pages/assets/loading/saitama.gif";

interface IProps {
  className?: string;
}
export const PixPaymentLoading = ({ className }: IProps) => {
  return (
    <>
      <Styled.PixPaymentLoaderWrapper className={className}>
        <Image className={className} src={gif} alt="gif" />
      </Styled.PixPaymentLoaderWrapper>
    </>
  );
};
