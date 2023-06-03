import React from 'react';
import * as Styled from './styles';

interface IProps {
  loading: boolean;
  paymentStatus: string
}
export const Thanks = ({ loading, paymentStatus }: IProps) => {
  return (
    <>
      <Styled.AppreciationWrapper>
        {!loading ? (
          <>
            <h2>Dados preenchidos com sucesso!</h2>
            <p>A equipe PlayAnime agradece a sua preferência!</p>
            <p>Clique no botão &#34;Enviar&#34; para realizar a sua renovação!</p>
          </>
        ) : (
          <>
            <h2>{paymentStatus}</h2>
          </>
        )}
      </Styled.AppreciationWrapper>
    </>
  );
};
