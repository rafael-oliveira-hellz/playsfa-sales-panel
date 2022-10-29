import Image from 'next/image';
import Link from 'next/link';
import AbrirEmNovaGuia from '../assets/abrir-em-nova-janela.png';
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
  // create a phone number mask in the format (+55) 11 99999-9999 or (+55) 11 9999-9999
  const phoneMask = (phone: string) => {
    const phoneArr = phone.split('');
    const phoneMasked = phoneArr.map((item, index) => {
      if (index === 0) {
        return `+(${item}`;
      }
      if (index === 1) {
        return `${item}) `;
      }
      if (index === 2) {
        return ` ${item}`;
      }
      if (index === 3 || index === 4) {
        return `${item} `;
      }
      if (index === 8) {
        return `${item}-`;
      }
      if (index === 12) {
        return `${item}`;
      }
      return item;
    });
    return phoneMasked.join('');
  };

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
                && userWhatsapp ? phoneMask(userWhatsapp) : 'Não Possui'}</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Telegram: </p>
              <p className="purchase-card__body__info__value">{userTelegram && userTelegram ? userTelegram : 'Não Possui'}</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">ID Discord: </p>
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
              <p className="purchase-card__body__info__title">Valor do Plano Escolhido: </p>
              <p className="purchase-card__body__info__value">R${planPrice},00</p>
            </div>
            <div className="purchase-card__body__info">
              <p className="purchase-card__body__info__title">Link de Pagamento: </p>
              <p className="purchase-card__body__info__value">
                <Link href={paymentUrl} target='_blank'>
                  {paymentUrl}
                  <Image src={AbrirEmNovaGuia} alt="Abrir em nova guia" width={100} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Styled.PurchaseCardWrapper>
    </>
  );
};

export default PurchaseCard;