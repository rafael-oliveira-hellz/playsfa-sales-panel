import styled, { css } from "styled-components";

export const WaitingPaymentWrapper = styled.div`
  ${({ theme }) => css`
    visibility: visible;
    opacity: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.fullPercentWidth};
    min-height: ${theme.sizes.fullPercentHeight};
    height: ${theme.sizes.fullVH};
    background: rgba(0, 0, 0, 0.78);
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    gap: 3rem;
    transition: all 250ms ease-in-out;

    & h2 {
      color: ${theme.colors.fonts};
      font-size: 3.5rem;
    }

    &.closing,
    & .image-wrapper img.closing {
      visibility: hidden;
      opacity: 0;
    }

    & .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: 50%;
      top: 20%;

      img {
        border-radius: 5%;
        border: 15px groove red;
        height: 100%;
        bottom: 5rem;
        transition: all 250ms ease-in-out;
      }
    }
  `}
`;

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    border-radius: 8px;
    padding: 2rem;
    max-width: 300px;
    width: 90%;
    text-align: center;

    .pay-now-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #f8f8a0;
      color: #000000;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      margin-top: 10px;
    }

    .pay-now-button:hover {
      background-color: #ebea70;
    }

    h2 {
      color: ${theme.colors.font};
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;

      img {
        border-radius: 8px;
        max-height: 200px;
        max-width: 100%;
      }
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    margin-bottom: 1rem;

    .image-wrapper {
      margin-bottom: 1rem;

      img {
        border-radius: 8px;
        max-height: 200px;
        max-width: 100%;
      }
    }

    .payment-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      h2 {
        color: #333;
        font-size: 1.5rem;
        font-weight: 900;
        margin-bottom: 1rem;
      }

      h3 {
        color: #333;
        font-size: 1.2rem;
        font-weight: 900;
      }

      .pay-now-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #f8f8a0;
        color: #000000;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        margin-top: 10px;
      }

      .pay-now-button:hover {
        background-color: #ebea70;
      }
    }

    @media (min-width: 768px) {
      /* Ajuste as propriedades abaixo de acordo com o layout desejado para telas maiores */
      width: 50vw;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 25%;
      top: 25%;
      margin-left: 25vw;

      .image-wrapper {
        margin-right: 1rem;
        margin-bottom: 0;
      }

      .payment-details {
        align-items: center;
        justify-content: center;
        text-align: left;
        width: 60%;

        h2 {
          font-size: 2rem;
        }

        h3 {
          font-size: 1.5rem;
        }
      }
    }
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    background-color: #ff2400;
    border: none;
    color: ${theme.colors.font};
    cursor: pointer;
    padding: 0.5rem;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    svg {
      font-size: 1.5rem;
    }

    &:hover {
      background-color: #ff2400;
      opacity: 0.7;
    }

    &:focus {
      outline: none;
    }

    @media (min-width: 240px) and (max-width: 319px) {
      margin-top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      top: 79%;
      position: absolute;
      width: 25%;
      height: 3%;
      margin-left: 26%;
    }

    @media (min-width: 320px) and (max-width: 359px) {
      margin-top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      top: 82%;
      position: absolute;
      width: 25%;
      height: 3%;
      margin-left: 24%;
    }

    @media (min-width: 360px) and (max-width: 374px) {
      margin-top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      top: 78.5%;
      position: absolute;
      width: 25%;
      height: 3%;
      margin-left: 27%;
    }

    @media (min-width: 375px) and (max-width: 419px) {
      margin-top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      top: 78.5%;
      position: absolute;
      width: 25%;
      height: 3%;
      margin-left: 28%;
    }

    @media (min-width: 420px) and (max-width: 478px) {
    margin-left: 31%;
    margin-top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 78.5%;
    position: absolute;
    width: 50%;
    height: 4%;
  }

  @media (min-width: 768px) {
      margin-top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      top: 75%;
      position: absolute;
      width: 20vw;
      height: 3vh;
      margin-left: 40vw;
  }
  `}


`;

