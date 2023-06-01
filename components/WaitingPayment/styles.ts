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
