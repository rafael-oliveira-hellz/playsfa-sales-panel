import Image from 'next/image';
import * as Styled from './styles';
import QRCode from '../assets/qr-code-styling.png';

export const SignUpMessage = () => {
  return (
    <>
      <Styled.SignUpMessageWrapper>
        <p>
          Email inválido! Não possui uma conta? Faça a leitura do nosso QR Code!
        </p>
        <Image src={QRCode} alt='QR Code para cadastro de novos usuários' />
      </Styled.SignUpMessageWrapper>
    </>
  );
};
