import React from "react";
import * as Styled from "./styles";

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
            <p>
              Clique no botão &#34;Enviar&#34; para realizar a sua renovação!
            </p>
          </>
        ) : (
          <>
            <h2>Pagamento enviado com sucesso</h2>
            <h3 style={{ fontSize: "16px" }}>
              Você receberá um e-mail com o status do seu pedido
            </h3>
          </>
        )}
      </Styled.AppreciationWrapper>
    </>
  );
};
