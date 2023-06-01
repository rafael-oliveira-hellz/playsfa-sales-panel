import React from 'react';
import * as Styled from './styles';
import Deadpool from '../../assets/loading/deadpool-scared.gif';
export default function NotFound() {
  return (
    <>
      <Styled.NotFoundWrapper>
        <h1>404 - Página não Encontrada</h1>
        <div className='img-wrapper'>
          <img src={Deadpool} alt='Deadpool' />
        </div>
      </Styled.NotFoundWrapper>
    </>
  );
}
