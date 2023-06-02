import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.home};
    width: ${theme.sizes.fullPercentWidth};
    min-height: ${theme.sizes.fullVH};
    height: ${theme.sizes.fullPercentHeight};
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(54, 54, 144, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);

    & form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 10px;
      width: 50%;
      min-height: 90%;
      height: 90%;
      backdrop-filter: blur(6px);
      background-color: rgba(39, 14, 108, 1);
      border-radius: 26px;
      box-shadow: 3px 3px 68px 0px rgba(39, 14, 108, 0.5),
        inset -12px -12px 16px 0px rgba(39, 14, 108, 0.6),
        inset 0px 1px 10px 0px rgb(255, 255, 255);
    }
    & form .actions {
      width: ${theme.sizes.fullPercentWidth};
      height: ${theme.sizes.fullPercentHeight};
    }

    & form .actions .inputs-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${theme.sizes.fullPercentWidth};
      border-radius: 2.6rem;
    }

    & form .actions .button-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: ${theme.sizes.fullPercentWidth};
      height: fit-content;
      padding: 1rem;
      gap: 1rem;
    }
    & form .actions .button-wrapper button {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      align-content: center;
      color: ${({ theme }) => theme.colors.fonts};
      border: none;
      min-width: 12rem;
      width: 45%;
      height: 4rem;
      cursor: pointer;
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 0px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset 0px -2px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);

      transition: all 250ms ease-in-out;
    }
    & form .actions .button-wrapper button:hover {
      backdrop-filter: blur(0px);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 26px;
      box-shadow: 35px 35px 68px 0px rgba(27, 3, 89, 0.5),
        inset -12px -12px 16px 0px rgba(27, 3, 89, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
    }

    & form .actions .button-wrapper button span {
      font-size: 2rem;
      color: ${theme.colors.btn};
      color: ${theme.colors.fonts};
    }
    @media all and (min-width: 150px) and (max-width: 220px) {
      & form {
        width: 95%;
        height: 98%;
      }

      & form .actions .button-wrapper {
        flex-direction: column;
        gap: 0.5rem;
      }
      & form .actions .button-wrapper {
        flex-wrap: nowrap;
        align-self: baseline;
        margin-top: 1rem;
      }
      & form .actions .button-wrapper button {
        height: 50%;
        align-self: center;
      }
    }
    @media all and (min-width: 221px) and (max-width: 369px) {
      & form {
        width: 90%;
        height: 98%;
      }
      & form .actions .button-wrapper {
        margin-top: 0.8rem;
      }
    }
    @media all and (min-width: 370px) and (max-width: 549px) {
      & form {
        width: 90%;
        height: 98%;
      }

      & form .actions .button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${theme.sizes.fullPercentWidth};
        height: fit-content;
      }
      & form .actions .button-wrapper button {
        gap: 1.5rem;
      }
    }
    @media all and (min-width: 550px) and (max-width: 940px) {
      & form {
        width: 60%;
        max-width: 70%;
      }
      & form {
        height: 99%;
      }
    }
    @media all and (min-width: 941px) and (max-width: 1100px) {
      & form {
        height: 98%;
      }
    }
  `}
`;

export const AppreciationWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    background-color: transparent;
    width: ${theme.sizes.fullPercentWidth};
    max-width: ${theme.sizes.fullPercentWidth};
    height: 44rem;
    padding: 2rem;

    & h2 {
      color: ${theme.colors.fonts};
      font-size: 3.5rem;
      font-weight: bold;
      text-align: center;
      align-self: center;
      margin-bottom: 0.5rem;
      word-wrap: break-word;
    }

    & p {
      color: ${theme.colors.fonts};
      font-size: 2rem;
      line-height: 1.5;
      text-align: center;
      word-wrap: break-word;
    }
    @media all and (max-width: 220px) {
      & h2 {
        font-size: 2.5rem;
      }
      & p {
        font-size: 1.8rem;
      }
    }
  `}
`;
