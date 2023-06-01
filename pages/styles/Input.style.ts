import styled, { css } from "styled-components";

const Input = styled.div`
  ${() => css`
    &.cpf-input,
    &.email-input {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 80%;
      max-width: 90%;
      height: 10vh;
      background-color: #f9f9fb;
      border: 3px solid #f9f9fb;
      border-radius: 0.25rem;
      margin-bottom: 1rem;
      gap: 0.5rem;
    }
    &.email-input {
      margin-top: 1rem;
    }
    &.cpf-input label,
    &.email-input label {
      color: #1b1b1b;
      font-size: 1.3rem;
      font-weight: 600;
      text-align: left;
    }
    &.cpf-input label {
      margin-right: 1rem;
    }
    & #text,
    & #email {
      background-color: transparent;
      border: 0;
      outline: 0;
      color: #1b1b1b;
      font-weight: 700;
      letter-spacing: 0.125rem;
      font-size: 1rem;
      line-height: 4.4rem;
      width: 70%;
      height: 90%;
      text-align: left;
      align-self: center;
      border-radius: 1rem;
      padding: 0.5rem;
    }

    & input::placeholder {
      /* color: #1b1b1b; */
      color: #aaaaaa;
      font-weight: 500;
      letter-spacing: 2px;
      word-break: break-word;
    }
    @media all and (max-width: 350px) {
      &.cpf-input,
      &.email-input {
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        height: 13vh;
      }
      &.cpf-input label,
      &.email-input label {
        font-size: 1rem;
        height: fit-content;
        margin: 0;
      }
      & #text,
      & #email {
        color: #5a5a5a;
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 0;
        height: 50%;
        width: 95%;
        margin-bottom: 1rem;
        border: 1px inset #aaaaaa;
      }
    }
  `}
`;

export default Input;
