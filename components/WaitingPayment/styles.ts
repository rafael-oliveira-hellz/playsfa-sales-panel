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
    & .close-modal {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      height: 3rem;
      padding: 1rem;
    }
    & .content-wrapper {
      flex-wrap: wrap;
      background-color: ${theme.colors.fonts};
      border-radius: 1rem;
      width: 70%;
      min-height: 90vh;
      height: 95%;
    }
    & .content-wrapper .title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      height: 8%;
      margin-bottom: 3rem;
      padding: 1rem;
    }
    & .content-wrapper .title-wrapper h2,
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
      height: fit-content;
      padding-left: 2rem;
    }
    & .content-wrapper .payment-status-content .payment-details {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
    }

    & .content-wrapper .payment-status-content .pix-link {
      height: fit-content;
    }

    @media all and (max-width: 750px) {
      & .content-wrapper {
        height: 99%;
        width: 90%;
      }
      & .content-wrapper .title-wrapper {
        height: fit-content;
        padding: 0.2rem;
        margin-bottom: 0;
      }
      & .content-wrapper .title-wrapper h2 {
        font-size: 2.3rem;
      }
      & .content-wrapper .payment-status-content {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50rem;
      }
      & .content-wrapper .payment-status-content .image-wrapper {
        height: 40%;
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
