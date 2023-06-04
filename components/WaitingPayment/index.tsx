import Image from "next/image";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";
import { AiOutlineClose } from "react-icons/ai";
import QRCode from "qrcode.react";
import React, { useState } from "react";
import styled, { css } from "styled-components";

const CopyButton = styled.button`
  ${({ theme }) => css`
    display: inline-block;
    padding: 10px 20px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.font};
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }

    &.copied {
      background-color: ${theme.colors.success};
    }
  `}
`;

interface IProps {
  accepted: boolean;
  paymentConfirmationStatus: string;
  showModal: boolean;
  handleCloseModal: () => void;
  type?: string;
  pixLink?: string;
}

const useCopiedState = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return { isCopied, handleCopy };
};

export const WaitingPayment = ({
  accepted,
  paymentConfirmationStatus,
  showModal,
  handleCloseModal,
  type,
  pixLink,
}: IProps) => {
  const { isCopied, handleCopy } = useCopiedState();

  const acceptedResponses = [
    "PAGAMENTO RECEBIDO",
    "ENTREGA DO PREMIUM EM ANDAMENTO",
    "ENTREGA DO PREMIUM CONCLUIDA",
  ];
  /**
 * {paymentConfirmationStatus === undefined ||
                      paymentConfirmationStatus === null ||
                      paymentConfirmationStatus === "" ||
                      paymentConfirmationStatus ===
                        "AGUARDANDO CONFIRMAÇÂO DO PAGAMENTO" ||
                      paymentConfirmationStatus === "AGUARDANDO PAGAMENTO"
                        ? "AGUARDANDO CONFIRMAÇÂO DO PAGAMENTO"
                        : paymentConfirmationStatus}
 * @returns
 */
  const validatePaymentStatus = () => {
    if (
      paymentConfirmationStatus === undefined ||
      paymentConfirmationStatus === null ||
      paymentConfirmationStatus === "" ||
      paymentConfirmationStatus === "AGUARDANDO CONFIRMAÇÃO DO PAGAMENTO" ||
      paymentConfirmationStatus === "AGUARDANDO PAGAMENTO"
    ) {
      return "AGUARDANDO CONFIRMAÇÃO DO PAGAMENTO";
    }
    return paymentConfirmationStatus;
  };

  return (
    <>
      {showModal && (
        <Styled.ModalOverlay>
          <Styled.ModalContent>
            <Styled.Card>
              {(accepted &&
                paymentConfirmationStatus === acceptedResponses[0]) ||
              (accepted &&
                paymentConfirmationStatus === acceptedResponses[1]) ||
              (accepted &&
                paymentConfirmationStatus === acceptedResponses[2]) ? (
                <>
                  <div className="image-wrapper">
                    <Image src={Chuck} alt="chuck" />
                  </div>
                  <div className="payment-details">
                    <h2>{paymentConfirmationStatus}</h2>
                  </div>
                </>
              ) : (
                <>
                  <div className="image-wrapper">
                    <Image src={Deadpool} alt="deadpool" />
                  </div>
                  <div className="payment-details">
                    <h2>{validatePaymentStatus()}</h2>
                    {type === "pix" && (
                      <>
                        <h3>Para concluir o pagamento.</h3>
                        <h4
                          style={{
                            color: "#333",
                            fontWeight: "900",
                            fontSize: "1.2rem",
                          }}
                        >
                          Escaneie o QR Code abaixo:
                        </h4>
                        <QRCode value={pixLink as string} />

                        <div className="pix-link">
                          <CopyButton
                            className={isCopied ? "copied" : ""}
                            onClick={() => handleCopy(pixLink as string)}
                          >
                            {isCopied ? "Copiado!" : "Copiar"}
                          </CopyButton>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </Styled.Card>
            <Styled.CloseButton onClick={handleCloseModal}>
              <AiOutlineClose
                style={{ fontSize: "24px", fontWeight: "bold" }}
              />{" "}
              <span
                style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
              >
                Fechar
              </span>
            </Styled.CloseButton>
          </Styled.ModalContent>
        </Styled.ModalOverlay>
      )}
    </>
  );
};
