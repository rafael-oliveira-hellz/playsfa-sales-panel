import styled, { css } from "styled-components";

// export const PixFormWrapper = styled.div`
//   ${({ theme }) => css`
//     /* position: fixed; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(255, 255, 255, 0.6);
//     width: ${theme.sizes.fullPercentWidth};
//     min-height: ${theme.sizes.fullVH};
//     height: ${theme.sizes.fullPercentHeight};
//     z-index: 999;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(54, 54, 144, 0.05);
//     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//     backdrop-filter: blur(2.5px);
//     -webkit-backdrop-filter: blur(2.5px);

//     & form {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       background-color: #fff;
//       border-radius: 10px;
//       width: 50%;
//       height: 90%;
//       backdrop-filter: blur(6px);
//       background-color: rgba(39, 14, 108, 1);
//       border-radius: 26px;
//       box-shadow: 3px 3px 68px 0px rgba(39, 14, 108, 0.5),
//         inset -12px -12px 16px 0px rgba(39, 14, 108, 0.6),
//         inset 0px 1px 10px 0px rgb(255, 255, 255);
//     }

//     & form .close-button-wrapper {
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//       align-self: flex-end;
//       border-radius: 2.6rem;
//       width: fit-content;
//       height: fit-content;
//       padding: 2rem;
//     }
//     & form .close-button-wrapper #close-btn {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       background-color: transparent;
//       border: none;
//       color: ${theme.colors.fonts};
//       align-self: center;
//       width: fit-content;
//       border-radius: 2.6rem;
//       height: 2rem;
//       cursor: pointer;
//       transition: all 250ms ease-in-out;
//     }
//     & form .close-button-wrapper #close-btn svg {
//       align-self: center;
//       font-size: 3rem;
//     }
//     & form .close-button-wrapper #close-btn:hover {
//       background-color: rgba(255, 255, 255, 0.01);
//     }

//     @media all and (min-width: 150px) and (max-width: 220px) {
//       & form {
//         width: 95%;
//       }
//       & form .close-button-wrapper #close-btn {
//         width: 2rem !important;
//       }
//     }
//     @media all and (min-width: 221px) and (max-width: 369px) {
//       & form {
//         width: 90%;
//       }
//     }
//     @media all and (min-width: 370px) and (max-width: 549px) {
//       & form {
//         width: 90%;
//       }
//     }
//     @media all and (min-width: 550px) and (max-width: 940px) {
//       & form {
//         width: 60%;
//         max-width: 70%;
//       }
//     }
//   `}
// `;

export const PixPaymentWrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    width: ${theme.sizes.fullPercentWidth};
    max-width: ${theme.sizes.fullPercentWidth};
    height: ${theme.sizes.fullPercentHeight};
    border-radius: 2.6rem;
    padding: 2rem;
    gap: 3rem;

    & h2 {
      color: ${theme.colors.fonts};
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
      word-wrap: break-word;
    }
    & .inputs-wrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      min-width: fit-content;
      width: ${theme.sizes.fullPercentWidth};
      max-width: ${theme.sizes.fullPercentWidth};
    }
    & .inputs-wrapper label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.fonts};
      font-size: 2rem;
      min-width: fit-content;
      width: ${theme.sizes.fullPercentWidth};
      max-width: ${theme.sizes.fullPercentWidth};
      gap: 1rem;
    }

    & .inputs-wrapper input {
      border: 1px inset silver;
      border-radius: 1rem;
      height: 2.8rem;
      padding: 1rem;
      outline: none;
    }
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      align-content: center;
      color: ${({ theme }) => theme.colors.fonts};
      border: none;
      min-width: 12rem;
      width: 40%;
      height: 4rem;
      cursor: pointer;
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 0px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset 0px -2px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
      margin-top: 3rem;
      transition: all 250ms ease-in-out;
    }

    & button:hover {
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 35px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset -12px -12px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
    }
    @media all and (max-width: 264px) {
      & {
        align-self: center;
        width: 50% !important;
        padding: 1rem;
      }
      & h2 {
        font-size: 1.8rem;
      }
      & .inputs-wrapper {
        flex-wrap: wrap;
        gap: 2rem;
        align-self: center;
      }

      & .inputs-wrapper label {
        align-self: center;
        width: fit-content;
      }

      & .inputs-wrapper label input {
        align-self: center;
        width: 90%;
      }
    }

    @media all and (min-width: 265px) and (max-width: 750px) {
      & .inputs-wrapper {
        flex-wrap: wrap;
      }
    }
  `}
`;

export const QRCodeWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(30, 21, 55, 0.6);
    width: ${theme.sizes.fullPercentWidth};
    height: ${theme.sizes.fullPercentHeight};
    max-height: ${theme.sizes.fullVH};
    z-index: 9999;
    top: 0;
    bottom: 0;
  `}
`;
