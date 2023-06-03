import Image from "next/image";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
    router.push("/checkout");
  };


  return (
    <>
      {showModal && (
        <Styled.WaitingPaymentWrapper>
          <h2>{accepted && paymentConfirmationStatus === "PAGAMENTO RECEBIDO" ? "PAGAMENTO RECEBIDO" : paymentConfirmationStatus}</h2>
          <div className="image-wrapper">
            <Image src={accepted && paymentConfirmationStatus === "PAGAMENTO RECEBIDO" ? Chuck : Deadpool} alt={accepted && paymentConfirmationStatus === "PAGAMENTO RECEBIDO" ? "chuck" : "deadpool"} />
          </div>
          <Styled.CloseButton onClick={handleCloseModal}>
            Fechar
          </Styled.CloseButton>
        </Styled.WaitingPaymentWrapper>
      )}
    </>
  );
};
