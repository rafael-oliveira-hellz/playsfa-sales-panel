import styled, { css, keyframes } from 'styled-components';

const animation = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;
}
`;

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
    padding: 0.3rem 1rem;
    top: 0;
    bottom: 0;
    animation: ${animation} 0.3s linear;
    transition: all 0.3s ease-in-out;

    & h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.8rem;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      width: 100%;
      margin-bottom: 1rem;
      text-align: center;
      transform: translateY(-2rem);
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
    & .payment-card {
      display: flex;
      align-self: center;
      width: 100%;
      transform: translateY(-1.5rem);
    }

    & .close-box {
      display: flex;
      justify-content: flex-end;
      align-self: end;
      width: 25%;
      padding: 0.5rem;
      z-index: 5;
    }

    & .close-box svg {
      font-size: 1.8rem;
      cursor: pointer;
    }

    & .close-box svg:hover {
      color: #791bdd;
    }

    & .purchase-card {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    & .payment-card {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background-color: #fff;
      border-radius: 1rem;
      height: 30%;
      flex-wrap: wrap;
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
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      color: #000;
      font-weight: 500;
      text-align: center;
    }
    & .payment-card .payment-card__info {
      font-size: 1.8rem;
    }
    & .payment-card .payment-card__info__value {
      font-size: 1.3rem;
    }
    & .payment-card .payment-card__info__value a {
      display: flex;
      justify-content: center;
      word-break: break-all;
      padding: 0.5rem;
      width: 100%;
    }
    & .payment-card .payment-card__info__value a:hover {
      color: #120a8f;
      text-decoration: underline;
    }

    &.modal-closed {
      display: hidden !important;
      opacity: 0;
      z-index: -2;
      transition: all 0.3s ease-in-out;
    }

    & .payment-card__donation__info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1.75rem;
    }

    & .payment-card__donation__info p {     
      text-align: justify;
    }

    & .payment-card__donation__info p strong.info {
      color: #911308;
      font-size: 1.5rem;
      font-weight: 600;
      text-decoration: none;
    }

    & .payment-card__donation__info p strong {
      font-weight: 400;
      text-decoration: underline;
    }

    @media screen and (min-width: 300px) and (max-width: 400px) {
      & {
        align-self: center;
        width: 100%;
        height: 166vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      & h2 {
        font-size: 1rem;
        transform: translateY(-1.5rem);
      }

      & .purchase-card .purchase-card__body__info,
      & .purchase-card .purchase-card__body__info__value {
        font-size: 1rem;
      }

      & .payment-card {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;
      }
      & .payment-card .payment-card__info__value {
        width: 100%;
      }
      & .payment-card .payment-card__info,
      & .payment-card .payment-card__info__value a {
        font-size: 0.8rem;
        line-height: 1;
        text-align: center;
      }

      & .close-box {
        transform: translateY(0.8rem);
      }
    }
    @media screen and (min-width: 401px) {
      & {
        width: 90%;
        height: 90%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      & h2 {
        transform: translateY(-1.5rem);
        font-size: clamp(14px, 1.5rem, 1.5em);
      }

      & .payment-card {
        min-height: 15%;
      }

      & .purchase-card .purchase-card__body__info {
        font-size: 1.2rem;
      }

      & .purchase-card .purchase-card__body__info__value {
        font-size: 1rem;
      }
      & .close-box {
        transform: translateY(0.8rem);
      }
    }

    @media screen and (min-width: 500px) {
      & h2 {
        transform: translateY(-2.5rem);
      }

      & .purchase-card,
      & .payment-card {
        transform: translateY(-2rem);
      }

      & .close-box {
        transform: translateY(-0.1rem);
      }
    }

    @media screen and (min-width: 751px) {
      & {
        justify-content: space-between;
        width: 85%;
        height: 80%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      & h2 {
        transform: translateY(-2.5rem);
      }

      & .purchase-card,
      & .payment-card {
        transform: translateY(-2rem);
      }
      & .close-box {
        transform: translateY(-0.1rem);
      }
    }

    @media screen and (min-width: 1200px) {
      & h2 {
        transform: translateY(-2.5rem);
      }

      & .purchase-card {
        transform: translateY(-2.3rem);
      }

      & .payment-card {
        transform: translateY(-1.3rem);
      }
      & .purchase-card .purchase-card__body__info {
        font-size: 1.8rem;
      }
      & .purchase-card .purchase-card__body__info__value {
        font-size: 1.5rem;
      }
      & .close-box {
        transform: translateY(0.5rem);
      }
    }
  `}
`;

export default PurchaseCardWrapper;
