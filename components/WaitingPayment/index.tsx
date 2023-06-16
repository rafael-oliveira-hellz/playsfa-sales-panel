import Image from "next/image";
import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";
import QRCode from "qrcode.react";
import { AiOutlineClose } from "react-icons/ai";
import { useCopiedState } from "../Hooks/useCopiedState";
import { PixText } from "./PixCode";

interface IProps {
  accepted?: boolean;
  paymentConfirmationStatus?: string;
  showModal?: boolean;
  handleCloseModal?: () => void;
  type?: string;
  pixLink?: string;
}
const Payment = ({
  accepted,
  paymentConfirmationStatus,
  showModal,
  handleCloseModal,
  type,
  pixLink,
}: IProps) => {
  const { isCopied, handleCopy, error } = useCopiedState();

  // const [modal, setModal] = useState(true);

  const acceptedResponses = [
    "PAGAMENTO RECEBIDO",
    "ENTREGA DO PREMIUM EM ANDAMENTO",
    "ENTREGA DO PREMIUM CONCLUIDA",
  ];

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
        <Styled.WaitingPaymentWrapper>
          <div className="content-wrapper">
            <div className="close-modal">
              <AiOutlineClose
                onClick={handleCloseModal}
                style={{
                  color: "#000",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="payment-status-content">
              {(accepted &&
                paymentConfirmationStatus === acceptedResponses[0]) ||
              (accepted &&
                paymentConfirmationStatus === acceptedResponses[1]) ||
              (accepted &&
                paymentConfirmationStatus === acceptedResponses[2]) ? (
                <>
                  <div className="image-wrapper">
                    <Image src={Chuck} alt="Chuck Norris" />
                  </div>
                </>
              ) : (
                <>
                  <div className="image-wrapper">
                    <Image src={Deadpool} alt="Chuck Norris" />
                  </div>
                  <div className="payment-details">
                    <h2>{validatePaymentStatus()}</h2>
                    {type === "pix" && (
                      <>
                        <p>
                          Para concluir o pagamento, escaneie o QR Code abaixo:
                        </p>
                        <QRCode value={pixLink as string} />
                        <div className="pix-link">
                          <Styled.CopyButton
                            className={isCopied ? "copied" : ""}
                            onClick={() => handleCopy(pixLink as string)}
                          >
                            {isCopied ? "Copiado!" : "Copiar"}
                          </Styled.CopyButton>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </Styled.WaitingPaymentWrapper>
      )}
    </>
  );
};
export default Payment;
