import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.section`
  ${({ theme }) => css`
    display: block;
    background-color: ${theme.colors.navbar};
    min-width: ${theme.sizes.fullVW};
    width: ${theme.sizes.fullPercentWidth};
    min-width: 10vh;
    height: 15vh;

    & header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      width: ${theme.sizes.fullPercentWidth};
      height: ${theme.sizes.fullPercentHeight};
      padding: 1rem;
    }

    & header h1 {
      color: ${theme.colors.fonts};
      font-size: 4rem;
      text-align: center;
    }

    @media all and (min-width: 150px) and (max-width: 350px) {
      & header h1 {
        font-size: 2rem;
        color: ${theme.colors.fonts};
      }
    }

    @media all and (max-width: 500px) {
      & header h1 {
        font-size: 3rem;
        color: ${theme.colors.fonts};
      }
    }

    @media all and (min-width: 750px) {
      & header h1 {
        font-size: 5rem;
        color: ${theme.colors.fonts};
      }
    }
  `}
`;
