import styled, { css } from 'styled-components';
import animation from './Animation.style';

const PurchaseCardWrapper = styled.div`
  ${() => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: #18042d;
    border: 1px solid rgb(51 65 85);
    border-radius: 1rem;
    width: 70%;
    height: 70%;
    margin-top: -0.5rem;
    margin-bottom: 1.1rem;
    padding: 0.3rem 1rem;
    margin: auto 0;
    z-index: 2;
    animation: ${animation} 250ms linear;
    transition: all 250ms ease-in-out;

    & h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.8rem;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      width: 100%;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    & p {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 6px;
      text-align: center;
      margin-right: 2rem;
      letter-spacing: 2px;
    }

    & .purchase-card,
    & .payment-card,
    & .close-box {
      display: flex;
      width: 100%;
    }

    & .close-box {
      justify-content: flex-end;
      padding: 0.5rem;
    }
    & .close-box svg {
      font-size: 1.8rem;
      cursor: pointer;
    }
    & .payment-card {
      flex-direction: column;
      background-color: #fff;
      border-radius: 1rem;
    }

    & .purchase-card .purchase-card__body__info,
    & .payment-card .payment-card__info {
      font-size: 1.5rem;
      font-weight: 600;
    }

    & .purchase-card .purchase-card__body__info__value {
      font-size: 1.3rem;
      font-weight: 400;
    }

    & .payment-card .payment-card__info,
    & .payment-card .payment-card__info__value {
      color: #000;
      font-weight: 500;
    }

    & .payment-card .payment-card__info__value {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
    }

    & .payment-card .payment-card__info__value a:hover {
      color: #120a8f;
      text-decoration: underline;
    }

    &.modal-closed {
      display: hidden !important;
      opacity: 0;
      z-index: -2;
      transition: all 250ms ease-in-out;
    }
  `}
`;

export default PurchaseCardWrapper;
