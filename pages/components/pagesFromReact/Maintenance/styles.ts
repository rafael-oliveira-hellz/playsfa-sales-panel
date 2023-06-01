import styled, { css } from 'styled-components';

export const MaintenanceWrapper = styled.main`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.home};
    width: ${theme.sizes.fullPercentWidth};
    min-height: ${theme.sizes.fullPercentHeight};
    height: ${theme.sizes.fullVH};
    max-height: ${theme.sizes.fullVH};
    gap: 2rem;
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    & h1 {
      color: ${theme.colors.fonts};
      text-align: center;
      font-size: 5rem;
    }
    & .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: 80%;
    }
    & .img-wrapper img {
      min-width: fit-content;
      width: 50%;
      max-width: 90%;
      height: ${theme.sizes.fullPercentHeight};
      border-radius: 50%;
    }

    @media all and (max-width: 500px) {
      & .img-wrapper img {
        min-width: 50%;
        width: 80%;
      }
    }
    @media all and (max-width: 750px) {
      & {
        gap: 3rem;
      }
      & h1 {
        font-size: 3rem;
      }

      & .img-wrapper {
        height: fit-content;
      }
      & .img-wrapper img {
        width: fit-content;
        height: fit-content;
      }
    }
  `}
`;
