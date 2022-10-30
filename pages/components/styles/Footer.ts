import styled, { css } from 'styled-components';

const Footer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    height: 8rem;
    background-color: #transparent;
    border-top: 1px solid rgb(51 65 85);
  `}
  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    line-height: 1.8;
  }

  & p:first-child {
    font-size: 1.5rem;
  }
  & p:nth-child(2) {
    font-size: 1.2rem;
  }
  & p:nth-child(2) em {
    margin-right: 0.3rem;
  }
  & p:nth-child(2) span {
    color: #fff;
    margin: 0 0.3rem;
  }
  & p:nth-child(2) a {
    text-decoration: underline;
    transition: all 250ms ease-in-out;
  }

  & p:nth-child(2) a:hover {
    color: #005fffff;
  }

  & p:nth-child(3) {
    font-size: 1rem;
  }
`;

export default Footer;
