import Image from "next/image";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";

interface IProps {
  accepted?: boolean;
  paymentConfirmationStatus?: string;
}
export const WaitingPayment = ({
  accepted,
  paymentConfirmationStatus,
}: IProps) => {
  return (
    <>
      {accepted ? (
        <Styled.WaitingPaymentWrapper>
          <h2>{paymentConfirmationStatus}</h2>
          <div className="image-wrapper">
            <Image src={Chuck} alt="chuck" />
          </div>
        </Styled.WaitingPaymentWrapper>
      ) : (
        <Styled.WaitingPaymentWrapper>
          <h2>
          {!accepted && paymentConfirmationStatus !== "PAGAMENTO RECEBIDO" && "AGUARDANDO PAGAMENTO..."}
          </h2>
          <div className="image-wrapper">
            <Image src={Deadpool} alt="deadpool" />
          </div>
        </Styled.WaitingPaymentWrapper>
      )}
    </>
  );
};
