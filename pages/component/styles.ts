import styled, { css } from 'styled-components';

export const Input = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;

    & label {
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
      width: 8%;
    }

    & input {
      /* background-color: #333333; */
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
  `}
`;
