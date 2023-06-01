import React from 'react';
import * as Styled from './styles';
import { Plan } from '../../types/Plan';

interface IProps {
  onButtonClick?: (plan: Plan) => void;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  plans?: Plan[];
}
export const Cards = ({
  onButtonClick,
  showModal,
  setShowModal,
  plans
}: IProps) => {
  const handleButtonClick = () => {
    if (plans && plans.length > 0) {
      onButtonClick && onButtonClick(plans[0]);
    }
  };

  return (
    <>
      {/* {showModal ? ( */}
      <Styled.CardsWrapper>
        <div className='title-wrapper'>
          <h3>
            <strong>{plans && plans.length > 0 && plans[0]?.name}</strong>
          </h3>
        </div>
        <div className='paragraph-wrapper'>
        <p style={{whiteSpace: "pre-line", hyphens: "none", wordBreak: "keep-all"}}>{plans && plans.length > 0 && plans[0]?.description}</p>
        </div>
        <div className='payment-methods-wrapper'>
          <p>Pix: R$ {plans && plans.length > 0 && plans[0]?.pix_price} </p>
          <p>
            Cartão de Crédito: R$ {plans && plans.length > 0 && plans[0]?.price}
          </p>
        </div>
        <button type='submit' onClick={handleButtonClick}>
          ESCOLHER PLANO
        </button>
      </Styled.CardsWrapper>
      {/*  ) : null} */}
    </>
  );
};
