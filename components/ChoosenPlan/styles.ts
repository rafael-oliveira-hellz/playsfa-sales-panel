import styled, { css } from "styled-components";

export const ChoosenPlanWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.home};
    columns: 2;
    width: ${theme.sizes.fullPercentWidth};
    min-height: ${theme.sizes.fullVH};
    height: ${theme.sizes.fullPercentHeight};

    & .plan-cards-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: ${theme.sizes.fullPercentHeight};
      padding: 2rem;
      background-color: ${theme.colors.home};
    }

    & .plan-cards-wrapper .title-wrapper,
    & .user-search .title-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
    }

    & .plan-cards-wrapper .title-wrapper h2,
    & .user-search .title-wrapper h2 {
      color: ${theme.colors.fonts};
      font-size: 3rem;
      text-align: center;
      padding: 1rem;
    }

    & .plan-cards-wrapper .plan-cards {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: ${theme.sizes.fullPercentHeight};
    }

    & .user-search {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      width: ${theme.sizes.fullPercentWidth};
      height: ${theme.sizes.fullPercentHeight};
      padding: 2rem;
      background-color: ${theme.colors.home};
    }

    @media all and (max-width: 1085px) {
      & {
        flex-direction: column;
      }
    }
  `}
`;
