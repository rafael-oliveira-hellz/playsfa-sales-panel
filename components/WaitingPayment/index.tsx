import Image from "next/image";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";
import { AiOutlineClose } from "react-icons/ai";

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
            {(accepted &&
              paymentConfirmationStatus === "PAGAMENTO RECEBIDO") ||
              (accepted && paymentConfirmationStatus === "ENTREGA DO PREMIUM EM ANDAMENTO") ||
              (accepted && paymentConfirmationStatus === "ENTREGA DO PREMIUM CONCLUIDA") ? (
              <>
                <h2>{paymentConfirmationStatus}</h2>
                <div className="image-wrapper">
                  <Image src={Chuck} alt="chuck" />
                </div>
              </>
            ) : (
              <>
                <h2>{paymentConfirmationStatus}</h2>
                <div className="image-wrapper">
                  <Image src={Deadpool} alt="deadpool" />
                </div>

                {type === 'pix' && (
                  <a href={pixLink} target="_blank" rel="noopener noreferrer">
                    <button className="pay-now-button">Pagar Agora</button>
                  </a>
                )}
              </>
            )}
            <Styled.CloseButton onClick={handleCloseModal}>
              <AiOutlineClose style={{fontSize: "24px", fontWeight: "bold"}} /> <span style={{fontSize: "18px", fontWeight: "bold", color: "white"}} >Fechar</span>
            </Styled.CloseButton>
          </Styled.ModalContent>
        </Styled.ModalOverlay>
      )}
    </>
  );
};
