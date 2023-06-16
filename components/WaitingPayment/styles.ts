import styled, { css } from "styled-components";

export const WaitingPaymentWrapper = styled.div`
  ${({ theme }) => css`
    visibility: visible;
    opacity: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.78);
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: all 250ms ease-in-out;

    & .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
      background-color: ${theme.colors.fonts};
      height: ${theme.sizes.fullPercentHeight};
    }

    & .content-wrapper .close-modal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      padding: 1rem;
    }

    & .content-wrapper .payment-status-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: ${theme.sizes.fullPercentHeight};
    }
    & .content-wrapper .payment-status-content .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
    }
    & .content-wrapper .payment-status-content .image-wrapper img {
      width: 50%;
    }
    & .content-wrapper .payment-status-content .payment-details {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: ${theme.sizes.fullPercentHeight};
      gap: 1rem;
    }
    & .content-wrapper .payment-status-content .payment-details h2 {
      color: ${theme.colors.footer};
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1rem;
      line-height: 1.2;
    }
    & .content-wrapper .payment-status-content .payment-details p {
      color: #333;
      font-size: 1.2rem;
      font-weight: 800;
    }
    & .content-wrapper .payment-status-content .payment-details canvas {
      width: 18rem !important;
      height: 18rem !important;
    }
    & .content-wrapper .payment-status-content .payment-details .pix-link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
    &
      .content-wrapper
      .payment-status-content
      .payment-details
      .pix-code-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: ${theme.sizes.fullPercentHeight};
    }
    &
      .content-wrapper
      .payment-status-content
      .payment-details
      .pix-code-wrapper
      strong {
      word-wrap: break-word;
      color: ${theme.colors.footer};
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.2;
      text-align: center;
    }
    &
      .content-wrapper
      .payment-status-content
      .payment-details
      .pix-code-wrapper
      span {
      word-wrap: break-word;
      word-break: break-all;
      font-size: 1.4rem;
      line-height: 1.2;
      color: ${theme.colors.footer};
    }
    @media all and (min-width: 750px) {
      & .content-wrapper {
        width: 80%;
        border-radius: 1rem;
        max-width: 84rem;
        height: 99%;
      }

      & .content-wrapper .close-modal svg {
        font-size: 2.5rem !important;
      }
      & .content-wrapper .payment-status-content .image-wrapper img {
        width: 70%;
      }
      & .content-wrapper .payment-status-content .payment-details canvas {
        width: 16rem !important;
        height: 16rem !important;
      }
      & .content-wrapper .payment-status-content .payment-details .pix-link {
        width: 100%;
        transform: translateY(-0.5rem);
      }
    }
  `}
`;

export const CopyButton = styled.button`
  ${({ theme }) => css`
    display: inline-block;
    padding: 10px 20px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.font};
    font-size: 1.6rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    max-width: 16rem;

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }

    &.copied {
      background-color: ${theme.colors.success};
    }

    @media all and (min-width: 750px) {
      & {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
      }
    }
  `}
`;
