import styled, { css } from 'styled-components';

const SignUpMessageWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: -0.5rem;
    margin-bottom: 1.1rem;
    padding: 0 1rem;

    & p {
      color: #ff0000;
      font-size: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 6px;
      text-align: center;
    }

    & img {
      width: 10rem;
      width: 179.5px;
    }

    & p:hover {
      text-decoration: underline;
    }
    & .toggle-hide-app {
      display: none;
    }
    @media screen and (max-width: 991px) {
      & .toggle-hide-qr {
        display: none;
      }

      & .toggle-hide-app {
        display: flex;
      }
      & .toggle-hide-app > img {
        margin-top: 0.5rem;
      }
    }
  `}
`;

export default SignUpMessageWrapper;
