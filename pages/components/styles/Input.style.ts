import styled, { css } from "styled-components";

const Input = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77%;
    height: 3.8125rem;
    margin-top: 1.5rem;
    margin-bottom: 1.8rem;
    background-color: #f9f9fb;
    border: 3px solid #f9f9fb;
    padding: 0 1rem;
    border-radius: 0.25rem;

    & label {
      color: #1b1b1b;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
      margin-right: 1rem;
    }

    & input {
      background-color: transparent;
      border: 0;
      outline: 0;
      color: #1b1b1b;
      font-weight: 700;
      letter-spacing: 0.125rem;
      font-size: 1.5rem;
      width: 70%;
    }

    & input::placeholder {
      color: #1b1b1b;
      font-weight: 700;
      letter-spacing: 2px;
    }

    @media screen and (max-width: 400px) {
      & {
        width: 90%;
      }
      & label {
        font-size: 0.9rem !important;
        width: 4rem !important;
        margin-right: 0rem !important;
        transform: translateX(-0.7rem) !important;
      }

      & input {
        font-size: 0.8rem;
        width: 75%;
        transform: translateX(-0.8rem) !important;
      }

      & input::placeholder {
        font-size: 0.7rem;
        letter-spacing: 0;
        font-weight: 500;
      }
    }

    @media screen and (max-width: 600px) {
      & label {
        font-size: 0.7rem !important;
        width: 2.6rem;
        transform: translateX(-0.7rem) !important;
        margin-right: 1rem;
      }
      & input {
        font-size: 0.8rem;
        width: 85%;
        transform: translateX(-1.6rem) !important;
      }

      & input::placeholder {
        font-size: 0.5rem;
      }
    }

    @media screen and (max-width: 700px) {
      & label {
        font-size: 1rem;
        transform: translateX(-1.8rem) !important;
      }

      & input {
        font-size: 0.8rem;
        transform: translateX(-2.6rem) !important;
      }

      & input::placeholder {
        font-size: 0.8rem !important;
      }
    }

    @media screen and (max-width: 800px) {
      & label {
        font-size: 1.2rem !important;
        transform: translateX(-2.4rem) !important;
      }

      & input {
        font-size: 1rem;
        transform: translateX(-2.5rem);
      }
    }

    @media screen and (max-width: 900px) {
      & label {
        transform: translateX(-1.5rem);
      }

      & input::placeholder {
        font-size: 1rem !important;
      }
    }

    @media screen and (max-width: 1000px) {
      & label {
        transform: translateX(-1rem);
      }

      & input::placeholder {
        font-size: 1.2rem !important;
      }
    }
  `}
`;

export default Input;
