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
}

export const WaitingPayment = ({
  accepted,
  paymentConfirmationStatus,
  showModal,
  handleCloseModal,
}: IProps) => {
  console.log({ accepted, paymentConfirmationStatus, showModal });

  return (
    <>
      {showModal && (
        <Styled.ModalOverlay>
          <Styled.ModalContent>
            {accepted && paymentConfirmationStatus === "PAGAMENTO RECEBIDO" ? (
              <>
                <h2>PAGAMENTO RECEBIDO</h2>
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
