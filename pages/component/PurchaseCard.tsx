import Link from 'next/link';
import * as Styled from './styles';

type Props = {
  userName: string;
  userEmail: string;
  userWhatsapp: string | null;
  userPremium: number;
  userTelegram: string | null;
  userDiscord: string | null;
  paymentUrl: string;
  planName: string;
};

export const PurchaseCard = ({
  userName,
  userEmail,
  userWhatsapp,
  userPremium,
  userTelegram,
  userDiscord,
  paymentUrl,
  planName
}: Props) => {

  return (
    <>
      <Styled.PurchaseCardWrapper>
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
              <p className="purchase-card__body__info__title">Whatsapp: </p>
              <p className="purchase-card__body__info__value">{userWhatsapp
                && userWhatsapp ? userWhatsapp : 'Não Possui'}</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Telegram: </p>
              <p className="purchase-card__body__info__value">{userTelegram && userTelegram ? userTelegram : 'Não Possui'}</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Discord: </p>
              <p className="purchase-card__body__info__value">{userDiscord && userDiscord ? userDiscord : 'Não Possui'}</p>
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
              <p className="purchase-card__body__info__title">Link de Pagamento: </p>
              <p className="purchase-card__body__info__value"><Link href={paymentUrl} target='_blank'>{paymentUrl}</Link></p>
            </div>
          </div>
        </div>
      </Styled.PurchaseCardWrapper>
    </>
  );
};

