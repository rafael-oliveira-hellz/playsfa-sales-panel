import styled, { css } from "styled-components";

export const ChoosePaymentWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.home};
    width: ${theme.sizes.fullPercentWidth};
    min-height: ${theme.sizes.fullPercentWidth};
    height: ${theme.sizes.fullVH};
    gap: 2rem;

    & h2 {
      color: ${theme.colors.fonts};
      font-size: 4rem;
      text-align: center;
    }

    & form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 80%;
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 3px 3px 8px 0px rgba(73, 36, 168, 0.5),
        inset -12px -2px 16px 0px rgba(73, 36, 168, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
      gap: 1.5rem;
    }

    & form .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: 5rem;
      gap: 5rem;
    }

    & form .wrapper .wrapper__pix,
    & form .wrapper .wrapper__card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: ${theme.sizes.fullPercentHeight};
      gap: 1rem;
    }

    & form .wrapper .wrapper__pix label,
    & form .wrapper .wrapper__card label {
      color: ${theme.colors.fonts};
      font-size: 2rem;
    }

    @media all and (max-width: 340px) {
      & h2 {
        font-size: 2.5rem;
        margin-top: 1rem;
      }
      & .payment-select {
        width: 100%;
      }

      & form .wrapper .wrapper__card label {
        font-size: 1.5rem;
        line-height: 1.2;
        text-align: center;
      }
    }
  `}
`;
