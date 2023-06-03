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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
      router.push("/checkout");
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <>
      {showModal && (
        <>
          {accepted && paymentConfirmationStatus === "PAGAMENTO RECEBIDO" ? (
            <Styled.WaitingPaymentWrapper>
              <h2>PAGAMENTO RECEBIDO</h2>
              <div className="image-wrapper">
                <Image src={Chuck} alt="chuck" />
              </div>
            </Styled.WaitingPaymentWrapper>
          ) : (
            <Styled.WaitingPaymentWrapper>
              <h2>{paymentConfirmationStatus}</h2>
              <div className="image-wrapper">
                <Image src={Deadpool} alt="deadpool" />
              </div>
            </Styled.WaitingPaymentWrapper>
          )}
        </>
      )}
    </>
  );
};
