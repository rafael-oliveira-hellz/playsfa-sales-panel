import Image from 'next/image';
import { useEffect, useState } from 'react';
import QRCode from '../assets/qr-code-styling.png';
import * as Styled from './styles';

export const SignUpMessage = () => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
      <Styled.SignUpMessageWrapper>
        <p>
          Email inválido! Não possui uma conta? Faça a leitura do nosso QR Code e cadastre-se!
        </p>
        <Image src={QRCode} alt='QR Code para cadastro de novos usuários' />

        <p>
          Tempo restante: {counter} segundos.
        </p>
      </Styled.SignUpMessageWrapper>
    </>
  );
};
