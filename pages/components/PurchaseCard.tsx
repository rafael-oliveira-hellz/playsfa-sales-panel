import { IoMdCloseCircleOutline } from 'react-icons/io';
import styled, { css, keyframes } from 'styled-components';
import MercadoPagoBtn from './MercadoPagoBtn';
import PurchaseCardWrapper from './styles/PurchaseCardWrapper.style';

const animation = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;
}
`;

const Section = styled.section`
  ${() => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(51 65 85);
    background-color: #350b63;
    border-radius: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    min-height: calc(100vh + 9vh);
    z-index: 1;
    opacity: 0.95;
    animation: ${animation} 0.3s linear;
    transition: all 0.3s ease-in-out;

    &.modal-closed {
      display: hidden !important;
      opacity: 0;
      z-index: -2;
      transition: all 0.3s ease-in-out;
    }
    @media screen and (min-width: 300px) and (max-width: 750px) {
      & {
        height: 100vh;
      }
    }
    @media screen and (min-width: 751px) and (max-width: 1250px) {
      & {
        height: 100vh;
      }
    }
  `}
`;

type Props = {
  userName: string;
  userEmail: string;
  userPremium: number;
  paymentUrl: string;
  planName: string;
  planPrice: string;
  customClass?: any;
  paymentMethod: string;
  onClick?: () => void;
};

const PurchaseCard = ({
  userName,
  userEmail,
  userPremium,
  paymentUrl,
  planName,
  planPrice,
  customClass,
  onClick,
  paymentMethod
}: Props) => {
  const handlePay = (paymentMethod: string) => {
    if (paymentMethod === 'boleto') {
      paymentMethod = 'BOLETO';
    } else if (paymentMethod === 'pix') {
      paymentMethod = 'PIX';
    } else {
      paymentMethod = 'CARTÃO DE CRÉDITO';
    }

    return paymentMethod;
  };

  return (
    <>
      <Section className={customClass}>
        <PurchaseCardWrapper className={customClass}>
          <div className='close-box'>
            <IoMdCloseCircleOutline onClick={onClick} />
          </div>
          <h2>Resumo da Solicitação</h2>
          <div className='purchase-card'>
            <p className='purchase-card__body__info'>Nome: </p>
            <p className='purchase-card__body__info__value'>{userName}</p>
          </div>
          <div className='purchase-card'>
            <p className='purchase-card__body__info'>Email: </p>
            <p className='purchase-card__body__info__value'>{userEmail}</p>
          </div>
          <div className='purchase-card'>
            <p className='purchase-card__body__info'>
              <strong className='purchase-card__body__info'>
                Já Possui Premium?
              </strong>
            </p>
            <p className='purchase-card__body__info__value'>
              {userPremium === 0 ? 'Não' : 'Sim'}
            </p>
          </div>
          <div className='purchase-card'>
            <p className='purchase-card__body__info'>Plano Escolhido: </p>
            <p className='purchase-card__body__info__value'>{planName}</p>
          </div>
          <div className='purchase-card'>
            <p className='purchase-card__body__info'>Forma de Pagamento: </p>
            <p className='purchase-card__body__info__value'>
              {handlePay(paymentMethod)}
            </p>
          </div>
          <div className='purchase-card'>
            <p className='purchase-card__body__info'>
              Valor do Plano Escolhido:{' '}
            </p>
            <p className='purchase-card__body__info__value'>R${planPrice},00</p>
          </div>

          <div className='payment-card'>
            <span className='payment-card__info__value'>
              <a href={paymentUrl} target='_blank' rel='noreferrer'>
                <MercadoPagoBtn />
              </a>
            </span>
          </div>

          <span className='payment-card__donation__info'>
            <p>
              <strong className="info">Importante:</strong> Ao clicar no botão acima, você será
              redirecionado para o site do Mercado Pago, onde poderá realizar o
              pagamento do seu plano escolhido.
            </p>
            <br />
            <p>
              <strong className="info">⚠</strong> Esteja ciente que você está fazendo uma <strong>doação</strong> e não pode ser devolvida, você não está comprando e sim doando, e como forma de gratificação iremos adicionar o Premium na sua conta.
            </p>
          </span>
        </PurchaseCardWrapper>
      </Section>
    </>
  );
}

export default PurchaseCard;
