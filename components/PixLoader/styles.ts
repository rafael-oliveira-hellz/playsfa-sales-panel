import styled, { css } from "styled-components";

export const PixPaymentLoaderWrapper = styled.div`
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
      rgba(81, 77, 129, 0.5),
      rgba(68, 96, 124, 0.5),
      rgba(101, 57, 138, 0.5),
      rgba(48, 115, 115, 0.15)
    );
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: all 250ms ease-in-out;

    &.closing,
    & img.closing {
      visibility: hidden;
      opacity: 0;
    }

    & img {
      border-radius: 50%;
      position: absolute;
      transition: all 250ms ease-in-out;
    }
  `}
`;
