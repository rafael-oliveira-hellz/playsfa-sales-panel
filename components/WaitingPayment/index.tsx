import Image from "next/image";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  accepted?: boolean;
  paymentConfirmationStatus?: string;
}
export const WaitingPayment = ({
  accepted,
  paymentConfirmationStatus,
}: IProps) => {
  const [showModal, setShowModal] = useState(true);

  const router = useRouter();

  const handleCloseModal = () => {
    setShowModal(false);
    // router.push("/checkout");
  };

  const resetModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    resetModal();
  }, [accepted, paymentConfirmationStatus]);


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
              <AiOutlineClose />
            </Styled.CloseButton>
          </Styled.ModalContent>
        </Styled.ModalOverlay>
      )}
    </>
  );
};
