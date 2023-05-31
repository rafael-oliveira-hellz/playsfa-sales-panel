import React from 'react';
import * as Styled from './styles';
import Goku from '../../assets/loading/goku-maintenance.gif';
export default function Maintenance() {
  return (
    <>
      <Styled.MaintenanceWrapper>
        <h1>Desculpe o transtorno. Estamos em manutenção!</h1>
        <div className='img-wrapper'>
          <img src={Goku} alt='Goku' />
        </div>
      </Styled.MaintenanceWrapper>
    </>
  );
}
