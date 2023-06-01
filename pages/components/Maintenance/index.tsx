import React from 'react';
import * as Styled from './styles';
import Goku from '../../assets/loading/goku-maintenance.gif';
import Image from 'next/image';
export default function Maintenance() {
  return (
    <>
      <Styled.MaintenanceWrapper>
        <h1>Desculpe o transtorno. Estamos em manutenção!</h1>
        <div className='img-wrapper'>
          <Image src={Goku} alt='Goku' />
        </div>
      </Styled.MaintenanceWrapper>
    </>
  );
}
