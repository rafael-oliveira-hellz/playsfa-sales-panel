import styled, { css } from 'styled-components';

export const Input = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;

    & label {
      color: #000000;
      text-align: left;
      width: 10%;
    }
    & input {
      background-color: #333333;
      border: 1px inset #c0c0c0;
      border-radius: 1.5rem;
      color: #fff;
      font-style: italic;
      font-weight: 700;
      letter-spacing: 2px;
      padding: 1rem;
      width: 60%;
      height: 2rem;
      outline: none;
    }
  `}
`;
