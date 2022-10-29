import styled, { css } from 'styled-components';

const Input = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;: ;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.8rem;

    & label {
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
      margin-bottom:10px;
    }

    & input {
      background-color: #fff;
      border: 1px inset #c0c0c0;
      border-radius: 1.5rem;
      color: #000;
      font-style: italic;
      font-weight: 700;
      letter-spacing: 2px;
      padding: 1rem;
      width: 60%;
      height: 2rem;
      outline: none;
    }

    & input::placeholder {
      color: #1B1B1B;
      font-weight: 700;
      letter-spacing: 2px;
    }

    @media screen and (max-width: 400px) {
      input{
        font-size: 0.8rem;
      }
    }
  `}
`;

export default Input;