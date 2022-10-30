import styled, { css } from 'styled-components';

const Footer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12rem;
    background-color: #transparent;
    position: fixed;
    bottom: 0;
    `}
  `;

export default Footer;