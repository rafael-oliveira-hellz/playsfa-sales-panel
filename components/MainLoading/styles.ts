import styled, { css } from 'styled-components';

export const LoadingWrapper = styled.div`
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
    /* background-color: rgba(30, 21, 55, 0.5); */
    /* background: linear-gradient(
      to bottom,
      rgba(112, 31, 84, 0.25),
      rgba(84, 31, 112, 0.25),
      rgba(64, 46, 112, 0.25),
      rgba(112, 31, 84, 0.25)
    ); */
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
