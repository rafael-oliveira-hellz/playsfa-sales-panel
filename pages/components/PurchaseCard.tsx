import Image from 'next/image';
import AbrirEmNovaGuia from '../assets/abrir-em-nova-janela.png';
import PurchaseCardWrapper from './PurchaseCardWrapper.style';

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
  planPrice
}: Props) => {
  return (
    <>
      <PurchaseCardWrapper>
        <div className="purchase-card">
          <div className="purchase-card__header">
            <h2 className="purchase-card__title">Resumo da Compra</h2>
          </div>
          <div className="purchase-card__body">
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Nome: </p>
              <p className="purchase-card__body__info__value">{userName}</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Email: </p>
              <p className="purchase-card__body__info__value">{userEmail}</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Já Possui Premium? </p>
              <p className="purchase-card__body__info__value">
                {userPremium === 0 ? 'Não' : 'Sim'}
              </p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Plano Escolhido: </p>
              <p className="purchase-card__body__info__value">{planName}</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Valor do Plano Escolhido: </p>
              <p className="purchase-card__body__info__value">R${planPrice},00</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Link de Pagamento: </p>
              <p className="purchase-card__body__info__value">
                <a href={paymentUrl} target='_blank' rel='noreferrer'>
                  {paymentUrl}
                  <Image src={AbrirEmNovaGuia} alt="Abrir em nova guia" width={100} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </PurchaseCardWrapper>
    </>
  );
};

export default PurchaseCard;