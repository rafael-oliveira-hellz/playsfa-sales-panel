import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import { useCopiedState } from "../Hooks/useCopiedState";

interface IProps {
  children: string | React.ReactNode;
  modal: boolean;
  setModal: any;
}
export const PixText = ({ children, modal, setModal }: IProps) => {
  useEffect(() => {
    window.addEventListener(
      "click",
      () => {
        // console.log(close);
        return setModal(false);
      },
      {
        capture: true,
      }
    );
  }, [modal]);

  return (
    <>{modal && <Styled.PixCodeWrapper>{children}</Styled.PixCodeWrapper>}</>
  );
};

// {error && !modal === true ? (
//   <div
//     className="pix-code-wrapper"
//     onClick={() => setModal(false)}
//   >
//     <strong style={{ color: "red" }}>
//       Caso o botão de copiar não funcione, o código
//       PIX é:
//     </strong>
//     <p style={{ wordBreak: "break-all" }}>
//       {pixLink}
//     </p>
//   </div>
// ) : (
//   modal === false
// )}
