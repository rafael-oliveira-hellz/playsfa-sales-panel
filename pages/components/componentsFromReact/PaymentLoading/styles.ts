import styled, { css } from 'styled-components';

export const PaymentLoadingWrapper = styled.div`
  ${({ theme }) => css`
    visibility: visible;
    opacity: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.fullPercentWidth};
    min-height: ${theme.sizes.fullPercentHeight};
    height: ${theme.sizes.fullVH};
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.1),
      rgba(8, 7, 8, 0.5),
      rgba(48, 115, 115, 0.15)
    );
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: all 350ms ease-in-out;

    &.closing,
    & img.closing {
      visibility: hidden;
      opacity: 0;
    }

    & img {
      position: absolute;
      z-index: 10000;
      border-radius: 50%;
      // left: 0
    }
  `}
`;
