import styled, { css } from 'styled-components';

export const UsersDataForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: ${theme.sizes.fullPercentWidth};
    height: ${theme.sizes.fullPercentHeight};
    gap: 1rem;
    padding: 2rem;

    & .input-mail {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px inset #fff;
      border-radius: 1.5rem;
      outline: none;
      height: 5rem;
      min-width: 25rem;
      width: 50%;
      padding: 1rem;
      font-size: 1.6rem;
      background: #ffffff;
      background: rgba(255, 255, 255, 0.7);
    }

    & .button-submit {
      color: ${theme.colors.fonts};
      font-weight: bold;
      font-size: 1.8rem;
      min-width: 12rem;
      width: 25%;
      max-width: 18rem;
      height: 5rem;
      border-radius: 26px;
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset 0px -2px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
      cursor: pointer;

      transition: all 250ms ease-in-out;
    }

    & .button-submit:hover {
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 35px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset -12px -12px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
    }

    & .input-mail::placeholder {
      text-align: center;
    }

    & .input-mail:focus {
      outline-style: inset;
      outline-color: rgba(73, 36, 168, 0.5);
    }
  `}
`;

export const ResultWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: ${theme.sizes.fullPercentWidth};
    height: ${theme.sizes.fullPercentHeight};
    padding: 2rem;

    & p {
      color: ${theme.colors.fonts};
      font-weight: bold;
      font-size: 2.2rem;
    }
    & p span {
      font-weight: normal;
    }
  `}
`;
