import Image from "next/image";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";
import { AiOutlineClose } from "react-icons/ai";
import QRCode from "qrcode.react";

interface IProps {
  accepted: boolean;
  paymentConfirmationStatus: string;
  showModal: boolean;
  handleCloseModal: () => void;
  type?: string;
  pixLink?: string;
}

export const WaitingPayment = ({
  accepted,
  paymentConfirmationStatus,
  showModal,
  handleCloseModal,
  type,
  pixLink
}: IProps) => {
  return (
    <>
      {showModal && (
        <Styled.ModalOverlay>
          <Styled.ModalContent>
            <Styled.Card>
              {(accepted && paymentConfirmationStatus === "PAGAMENTO RECEBIDO") ||
              (accepted && paymentConfirmationStatus === "ENTREGA DO PREMIUM EM ANDAMENTO") ||
              (accepted && paymentConfirmationStatus === "ENTREGA DO PREMIUM CONCLUIDA") ? (
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
                    <h2>{paymentConfirmationStatus}</h2>
                    {type === "pix" && (
                      <>
                        <h3>Para concluir o pagamento.</h3>
                        <h4 style={{color: "#333", fontWeight: "900", fontSize: "1.2rem"}}>Scaneie o QR Code abaixo:</h4>
                        <QRCode value={pixLink as string} />
                      </>
                    )}
                  </div>
                </>
              )}
            </Styled.Card>
            <Styled.CloseButton onClick={handleCloseModal}>
              <AiOutlineClose style={{ fontSize: "24px", fontWeight: "bold" }} />{" "}
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>Fechar</span>
            </Styled.CloseButton>
          </Styled.ModalContent>
        </Styled.ModalOverlay>
      )}
    </>
  );
};
