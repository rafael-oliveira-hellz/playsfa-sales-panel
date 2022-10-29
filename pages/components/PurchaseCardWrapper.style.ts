import styled, { css } from 'styled-components';

const PurchaseCardWrapper = styled.div`
  ${() => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #18042d;
    width: 50%;
    height: fit-content;
    margin-top: -0.5rem;
    margin-bottom: 1.1rem;
    padding: 0 1rem;
    margin: auto 0;

    z-index: 2;
    & .purchase-card {
      display: flex;
      width: 100%;
    }
    & p {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 6px;
      text-align: center;
      margin-right: 2rem;
    }
  `}
`;

export default PurchaseCardWrapper;
