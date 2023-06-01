import styled, { css } from 'styled-components';

export const CreditCardDataWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-width: fit-content;
    width: ${theme.sizes.fullPercentWidth};
    max-width: ${theme.sizes.fullPercentWidth};
    height: 48rem;
    padding: 2rem;
    border-radius: 2.6rem;

    & h2 {
      color: ${theme.colors.fonts};
      font-weight: bold;
      font-size: 3.5rem;
      text-align: center;
      margin-bottom: 0.8rem;
    }
    & label {
      display: flex;
      flex-direction: column;
      color: ${theme.colors.fonts};
      font-weight: bold;
      font-size: 1.8rem;
      min-width: fit-content;
      width: 90%;
      max-width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
      gap: 0.5rem;
    }
    & label input {
      border: 1px inset silver;
      border-radius: 1rem;
      height: 2.8rem;
      padding: 1rem;
      outline: none;
    }

    @media all and (max-width: 220px) {
      & {
        align-items: center;
        width: 10rem !important;
      }
      & h2 {
        font-size: 2rem;
      }

      & label {
        font-size: 1.5rem;
        width: 5rem !important;
      }
      & label input {
        width: ${theme.sizes.fullPercentWidth};
      }
    }
  `}
`;

export const ClientDataWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-width: fit-content;
    width: ${theme.sizes.fullPercentWidth};
    max-width: ${theme.sizes.fullPercentWidth};
    height: 44rem;
    padding: 2rem;
    border-radius: 2.6rem;

    & h2 {
      color: ${theme.colors.fonts};
      font-size: 3.5rem;
      font-weight: bold;
      text-align: center;
      align-self: center;
      margin-bottom: 2rem;
    }

    & label {
      display: flex;
      flex-direction: column;
      color: ${theme.colors.fonts};
      font-weight: bold;
      font-size: 1.8rem;
      min-width: fit-content;
      width: 90%;
      max-width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
    }
    & label input {
      border: 1px inset silver;
      border-radius: 1rem;
      height: 2.8rem;
      padding: 1rem;
      outline: none;
    }

    @media all and (min-width: 150px) and (max-width: 260px) {
      & {
        min-width: 10rem !important;
        height: 42rem;
      }
      & h2 {
        font-size: 2rem;
        word-wrap: break-word;
        margin: 0;
      }
      & label {
        font-size: 1.5rem;
        width: 8rem !important;
        word-wrap: break-word;
      }
      & label input {
        width: ${theme.sizes.fullPercentWidth};
      }
      & #nasc {
        align-items: center;
        align-self: center;
        font-size: 1.4rem !important;
      }
      & #nasc input[type='date'] {
        width: 85%;
      }
    }
  `}
`;

export const AddressDataWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-width: fit-content;
    width: ${theme.sizes.fullPercentWidth};
    max-width: ${theme.sizes.fullPercentWidth};
    height: 48rem;
    padding: 2rem;
    border-radius: 2.6rem;

    & h2 {
      color: ${theme.colors.fonts};
      font-size: 3.5rem;
      font-weight: bold;
      text-align: center;
      align-self: center;
      margin-bottom: 0.5rem;
    }

    & label {
      display: flex;
      flex-direction: column;
      color: ${theme.colors.fonts};
      font-weight: bold;
      font-size: 1.8rem;
      min-width: fit-content;
      width: 90%;
      max-width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
    }
    & label input {
      border: 1px inset silver;
      border-radius: 1rem;
      height: 3rem;
      padding: 1rem;
      outline: none;
    }

    @media all and (min-width: 150px) and (max-width: 249px) {
      & {
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 44rem;
        width: 50%;
      }

      & h2 {
        word-wrap: break-word;
        font-size: 2rem;
      }

      & label {
        font-size: 1.4rem;
        width: ${theme.sizes.fullPercentWidth};
      }

      & label input {
        width: ${theme.sizes.fullPercentWidth};
      }
    }

    @media all and (min-width: 250px) and (max-width: 310px) {
      & {
        height: 44rem;
      }
      & h2 {
        font-size: 2.5rem;
      }

      & label {
        font-size: 1.5rem;
        gap: 0.5rem;
      }
    }
  `}
`;

export const RecurrencyDataWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    min-width: ${theme.sizes.fullPercentWidth};
    width: ${theme.sizes.fullPercentWidth};
    height: 45rem;
    border-radius: 2.6rem;
    gap: 1.5rem;

    & h2 {
      word-wrap: break-word;
      color: ${theme.colors.fonts};
      font-size: 3.5rem;
      font-weight: bold;
      text-align: center;
      align-self: center;
      margin-bottom: 0.5rem;
    }

    & .inputs-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: ${theme.sizes.fullPercentWidth};
    }

    & .inputs-wrapper label {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.fonts};
      font-size: 2rem;
      min-width: 8rem;
      width: 30%;
      gap: 1rem;
    }
    @media all and (max-width: 340px) {
      & h2 {
        font-size: 2.1rem;
      }
    }
  `}
`;

export const SelectRecurrency = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    width: ${theme.sizes.fullPercentWidth};
    max-width: ${theme.sizes.fullPercentWidth};
    padding-bottom: 2rem;
    margin-top: 2rem;

    & label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.fonts};
      font-size: 2rem;
      text-align: center;
      min-width: fit-content;
      width: ${theme.sizes.fullPercentWidth};
      max-width: ${theme.sizes.fullPercentWidth};
      gap: 1rem;
    }

    & label select {
      border-radius: 1rem;
      min-width: fit-content;
      width: 50%;
      max-width: ${theme.sizes.fullPercentWidth};
      height: 3rem;
      padding: 0 1rem;
      font-weight: bold;
      border: 3px outset silver;
      outline: none;
    }
    & label select:focus {
      border: 3px inset rgba(0, 0, 0, 0.8);
    }
  `}
`;
