import styled, { css } from 'styled-components';

export const CardsWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 1rem;
    width: 80%;
    height: ${theme.sizes.fullPercentHeight};
    padding: 1rem 1rem 3rem;
    backdrop-filter: blur(0px);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 26px;
    box-shadow: 3px 3px 8px 0px rgba(73, 36, 168, 0.5),
      inset -12px -2px 16px 0px rgba(73, 36, 168, 0.6),
      inset 0px 11px 28px 0px rgb(255, 255, 255);

    & .title-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
      padding: 1rem;
    }

    & .title-wrapper h3 {
      color: ${theme.colors.fonts};
      font-size: 3rem;
      text-align: center;
      font-weight: bold;
    }

    & .paragraph-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
    }

    & .paragraph-wrapper p {
      color: ${theme.colors.fonts};
      font-size: 2rem;
      padding: 1rem;
      word-break: break-all;
    }

    & .payment-methods-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
      padding: 1rem;
    }
    & .payment-methods-wrapper p {
      color: ${theme.colors.fonts};
      font-size: 2rem;
      line-height: 1.5;
    }

    & button {
      align-self: center;
      color: ${theme.colors.fonts};
      border: none;
      min-width: 12rem;
      width: 45%;
      height: 4rem;
      font-size: 1rem;
      word-wrap: break-word;
      cursor: pointer;
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 0px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset 0px -2px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);

      transition: all 250ms ease-in-out;
    }

    & button:hover {
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 35px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset -12px -12px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
    }

    @media all and (max-width: 260px) {
      & button {
        word-wrap: break-word;
        width: fit-content !important;
        font-size: 1rem !important;
      }
    }
  `}
`;
