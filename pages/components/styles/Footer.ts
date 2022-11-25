import styled, { css } from 'styled-components';

const Footer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
    background-color: #transparent;
    border-top: 1px solid rgb(51 65 85);
  `}

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
  & div p,
  & .site-developers .site-developers__names span {
    color: #fff;
    text-align: center;
  }
  & .site-name,
  & .site-developers {
    padding: 0.3rem;
  }
  & .site-name .site-name__text {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

  & .site-developers .site-developers__names {
    font-size: 1.2rem;
    font-weight: 500;
  }

  & .site-developers .site-developers__names span {
    margin: 0 0.3rem;
  }
  & .site-developers .site-developers__names a {
    transition: all 0.3s ease-in-out;
  }
  & .site-developers .site-developers__names a:hover {
    color: #007fffff;
    text-decoration: underline;
  }

  & .site-copyrights {
    padding-bottom: 0.2rem;
  }

  @media screen and (max-width: 365px) {
    & {
      height: 9rem;
    }

    & .site-name,
    & .site-developers,
    & .site-copyrights {
      padding: 0;
    }

    & .site-name .site-name__text {
      font-size: 1.3rem;
      letter-spacing: 1.5px;
    }
    & .site-developers .site-developers__names {
      font-size: 1rem;
    }
    & .site-copyrights .site-copyrights__text {
      font-size: 1rem;
    }
  };


`;

export default Footer;
