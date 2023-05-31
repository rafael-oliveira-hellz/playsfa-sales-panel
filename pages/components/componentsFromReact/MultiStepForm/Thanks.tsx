import React from 'react';
import * as Styled from './styles';

interface IProps {
  loading: boolean;
}
export const Thanks = ({ loading }: IProps) => {
  return (
    <>
      <Styled.AppreciationWrapper>
        {!loading ? (
          <>
            <h2>Dados preenchidos com sucesso!</h2>
            <p>A equipe PlayAnime agradece a sua preferência!</p>
            <p>Clique no botão "Enviar" para realizar a sua renovação!</p>
          </>
        ) : (
          <>
            <h2>Pagamento efetuado com sucesso</h2>
          </>
        )}
      </Styled.AppreciationWrapper>
    </>
  );
};
