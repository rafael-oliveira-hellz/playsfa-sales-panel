import Image from 'next/image';
import QRCode from '../assets/qr-code-styling.png';
import SignUpMessageWrapper from './SignUpMessageWrapper.style';

const SignUpMessage = () => {
  return (
    <>
      <SignUpMessageWrapper>
        <p>
          Email inválido! Não possui uma conta? Faça a leitura do nosso QR Code e cadastre-se!
        </p>
        <Image src={QRCode} alt='QR Code para cadastro de novos usuários' />
      </SignUpMessageWrapper>
    </>
  );
};

export default SignUpMessage;