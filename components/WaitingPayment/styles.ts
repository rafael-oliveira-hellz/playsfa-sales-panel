import styled, { css } from "styled-components";

export const WaitingPaymentWrapper = styled.div`
  ${({ theme }) => css`
    visibility: visible;
    opacity: 1;
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.fullPercentWidth};
    min-height: ${theme.sizes.fullVH};
    height: ${theme.sizes.fullPercentHeight};
    background: rgba(0, 0, 0, 0.78);
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    gap: 3rem;
    transition: all 250ms ease-in-out;

    p {
      color: #333;
      font-weight: 900;
      font-size: 1.2rem;
    }
    & .content-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      background-color: ${theme.colors.fonts};
      border-radius: 1rem;
      width: 70%;
      min-height: 90vh;
      /* height: 98%; */
      gap: 5rem;
    }

    & .content-wrapper .close-modal {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: ${theme.sizes.full};
      height: 3rem;
      padding: 1rem;
      margin-top: 1rem;
    }

    /* & .content-wrapper .title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: 8%;
      margin-bottom: 3rem;
      padding: 1rem;
    } */
    /* & .content-wrapper .title-wrapper h2, */
    & .content-wrapper .payment-status-content .payment-details h2 {
      color: ${theme.colors.footer};
      font-size: 3.5rem;
      line-height: 1.2;
    }
    & .content-wrapper .payment-status-content {
      display: flex;
      justify-content: center;
      width: ${theme.sizes.fullPercentWidth};
      min-height: fit-content;
      height: 85%;
    }
    & .content-wrapper .payment-status-content .image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      width: 50%;
      padding-left: 2rem;
    }
    & .content-wrapper .payment-status-content .payment-details {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 50%;
      gap: 2rem;
    }

    & .content-wrapper .payment-status-content .pix-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: fit-content;
    }
    & .content-wrapper .payment-status-content .pix-link .pix-code-wrapper {

    @media all and (max-width: 340px) {

      & .content-wrapper .payment-status-content .image-wrapper {
        height: 30%;
        width: fit-content;
        margin-bottom: 1rem;
        padding-left: 0;
        margin-top: 5rem;
      }
      & .content-wrapper .payment-status-content .image-wrapper img {
        width: 90%;
        height: 90% !important;
      }
      & .content-wrapper .payment-status-content .payment-details {
        width: ${theme.sizes.fullPercentWidth};
        height: ${theme.sizes.fullPercentHeight} !important;
        border: 1px solid red;
      }
    }
    @media all and (max-width: 760px) {
      & .content-wrapper {
        height: 99%;
        width: 90%;
        gap: 1rem;
      }
      /* & .content-wrapper .title-wrapper {
        height: fit-content;
        padding: 0.2rem;
        margin-bottom: 0;
      } */
      /* & .content-wrapper .title-wrapper h2 {
        font-size: 2.3rem;
      } */
      & .content-wrapper .payment-status-content {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50rem;
      }

      & .content-wrapper .payment-status-content .image-wrapper {
        height: 45%;
        width: fit-content;
        margin-bottom: 1rem;
        padding-left: 0;
      }
      & .content-wrapper .payment-status-content .image-wrapper img {
        height: ${theme.sizes.fullPercentHeight};
      }
      & .content-wrapper .payment-status-content .payment-details {
        height: 60%;
      }
      & .content-wrapper .payment-status-content .payment-details h2 {
        font-size: 2rem;
      }
      & .content-wrapper .payment-status-content .payment-details p {
        text-align: center;
      }
    }
  `}
`;

export const PixCodeWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border: 1px solid red;
    /* top: 50%; */
    align-self: center;
    z-index: 9999999;

    & strong {
      color: #000;
      font-weight: bold;
      text-align: center;
      font-size: 1.2rem;
      padding: 0 1rem;
    }
    & p {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      padding: 0 1rem;
      word-break: break-all;
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
    /* margin-top: 10px; */

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }

    &.copied {
      background-color: ${theme.colors.success};
    }
  `}
`;
