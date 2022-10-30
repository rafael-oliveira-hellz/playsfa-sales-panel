import { IoMdCloseCircleOutline } from 'react-icons/io';
import styled, { css, keyframes } from 'styled-components';
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
    animation: ${animation} 250ms linear;
    transition: all 250ms ease-in-out;

    &.modal-closed {
      display: hidden !important;
      opacity: 0;
      z-index: -2;
      transition: all 250ms ease-in-out;
    }
    @media screen and (min-width: 300px) {
      & {
        height: 100%;
      }
    }
    @media screen and (min-width: 751px) and (max-width: 850px) {
      & {
        height: 175%;
      }
    }
    @media screen and (min-width: 851px) and (max-width: 950px) {
      & {
        height: 160%;
      }
    }
    @media screen and (min-width: 951px) and (max-width: 1250px) {
      height: 155%;
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
          <h2>Resumo da Compra</h2>
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
            <span className='payment-card__info'>Link de Pagamento: </span>
            <span className='payment-card__info__value'>
              <a href={paymentUrl} target='_blank' rel='noreferrer'>
                {paymentUrl}
              </a>
            </span>
          </div>
        </PurchaseCardWrapper>
      </Section>
    </>
  );
};

export default PurchaseCard;
