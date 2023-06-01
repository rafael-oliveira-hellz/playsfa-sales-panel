import Image from "next/image";
import * as Styled from "./styles";
import Deadpool from "../../pages/assets/loading/deadpool.gif";
import Chuck from "../../pages/assets/loading/chuck.gif";

interface IProps {
  confirmed?: boolean;
  paymentConfirmationStatus?: string;
}
export const WaitingPayment = ({
  confirmed,
  paymentConfirmationStatus,
}: IProps) => {
  return (
    <>
      {!confirmed ? (
        <Styled.WaitingPaymentWrapper>
          <h2>Aguardando pagamento</h2>
          <div className="image-wrapper">
            <Image src={Deadpool} alt="deadpool" />
          </div>
        </Styled.WaitingPaymentWrapper>
      ) : (
        <Styled.WaitingPaymentWrapper>
          <h2>{paymentConfirmationStatus}</h2>
          <div className="image-wrapper">
            <Image src={Chuck} alt="deadpool" />
          </div>
        </Styled.WaitingPaymentWrapper>
      )}
    </>
  );
};
