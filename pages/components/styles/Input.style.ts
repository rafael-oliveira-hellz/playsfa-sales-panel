import styled, { css } from 'styled-components';

const Input = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77%;
    height: 3.8125rem;
    margin-top: 1.5rem;
    margin-bottom: 1.8rem;
    background-color: #F9F9FB;
    border: 3px solid #F9F9FB;
    padding: 0 1rem;
    border-radius: 0.25rem;

    & label {
      color: #1B1B1B;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
      margin-right: 1rem;
    }

    & input {
      background-color: transparent;
      border: 0;
      outline: 0;
      color: #1B1B1B;
      font-weight: 700;
      letter-spacing: 0.125rem;
      font-size: 1.5rem;
      width: 70%;
    }

    & input::placeholder {
      color: #1B1B1B;
      font-weight: 700;
      letter-spacing: 2px;
    }

    @media screen and (max-width: 400px) {
      & input{
        font-size: 0.8rem;
        width: 75%;
      }
      & input::placeholder{
        font-size: 0.8rem;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
    @media screen and (max-width: 600px) {
      & input{
        font-size: 0.8rem;
        width: 75%;
      }
    }
  `}
`;

export default Input;
