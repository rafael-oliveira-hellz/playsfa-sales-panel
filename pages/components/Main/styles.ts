import styled, { css } from "styled-components";

const MainPageWrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.home};
    width: ${theme.sizes.fullPercentWidth};
    height: ${theme.sizes.fullPercentHeight};
    min-height: ${theme.sizes.fullVH};
    padding: 2rem 1rem 3rem;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    & .content-wrapper {
      border-radius: 2rem;
      width: 80%;
      min-height: 80vh;
      height: ${theme.sizes.fullPercentHeight};
      background: rgba(128, 255, 192, 0.1);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(2.5px);
      -webkit-backdrop-filter: blur(2.5px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    & .content-wrapper .content-wrapper__title-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    & .content-wrapper .content-wrapper__title-wrapper h2 {
      color: ${theme.colors.fonts};
      font-size: 4rem;
      text-align: center;
    }

    & .content-wrapper .content-wrapper__boxes-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      gap: 1rem;
      width: ${theme.sizes.fullPercentWidth};
      min-height: fit-content;
      height: ${theme.sizes.fullPercentHeight};
      padding: 1rem;
    }
    @media all and (max-width:280px) {
      & .content-wrapper .content-wrapper__title-wrapper h2 {
    font-size: 2.5rem;

      }
    @media all and (min-width: 750px) {
      & .content-wrapper {
        width: 95%;
      }
      & .content-wrapper .content-wrapper__boxes-wrapper {
        flex-direction: row;
      }
    }
    }
  `}
`;

export default MainPageWrapper;