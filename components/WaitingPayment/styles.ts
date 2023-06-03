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
    }
    & .image-wrapper img {
      border-radius: 5%;
      border: 15px groove red;
      height: 100%;
      bottom: 5rem;
      transition: all 250ms ease-in-out;
    }
  `}
`;

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
    max-width: 500px;
    width: 90%;
    text-align: center;

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
  `}
`;
