import Image from 'next/image';
import AbrirEmNovaGuia from '../assets/abrir-em-nova-janela.png';
import PurchaseCardWrapper from './styles/PurchaseCardWrapper.style';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import styled, { css, keyframes } from 'styled-components';

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
    height: calc(100vh + 9vh);
    z-index: 1;
    opacity: 0.9;
    animation: ${animation} 250ms linear;
    transition: all 250ms ease-in-out;

    &.modal-closed {
      display: hidden !important;
      opacity: 0;
      z-index: -2;
      transition: all 250ms ease-in-out;
    }
  `}
`;

type Props = {
  userName: string;
  userEmail: string;
  userWhatsapp: string | null;
  userPremium: number;
  userTelegram: string | null;
  userDiscord: string | null;
  paymentUrl: string;
  planName: string;
  planPrice: string;
  className?: string;
  customClass?: string | undefined;
  onClick?: () => void;
};

const PurchaseCard = ({
  userName,
  userEmail,
  userWhatsapp,
  userPremium,
  userTelegram,
  userDiscord,
  paymentUrl,
  planName,
  planPrice,
  className,
  customClass,
  onClick
}: Props) => {
  return (
    <>
      <Section className={customClass}></Section>
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
          <p className='purchase-card__body__info'>
            Valor do Plano Escolhido:{' '}
          </p>
          <p className='purchase-card__body__info__value'>R${planPrice},00</p>
        </div>

        <div className='payment-card'>
          <p className='payment-card__info'>Link de Pagamento: </p>
          <p className='payment-card__info__value'>
            <a href={paymentUrl} target='_blank' rel='noreferrer'>
              {paymentUrl}
            </a>
          </p>
        </div>
      </PurchaseCardWrapper>
    </>
  );
};

export default PurchaseCard;
