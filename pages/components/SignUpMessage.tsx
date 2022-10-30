import Image from 'next/image';
import QRCode from '../assets/qr-code-styling.png';
import SignUpMessageWrapper from './styles/SignUpMessageWrapper.style';
import AppStore from '../assets/google-play-logo.png';

const SignUpMessage = () => {
  return (
    <>
      <SignUpMessageWrapper>
        <p>
          Email inválido! Não possui uma conta? Faça a leitura do nosso QR Code
          e cadastre-se!
        </p>
        <Image
          className='toggle-hide-qr'
          src={QRCode}
          alt='QR Code para cadastro de novos usuários'
        />
        <a
          className='toggle-hide-app'
          href='http://link-do-app-na-play-store.com'
        >
          <Image src={AppStore} alt='Imagem com link para Google App Store' />
        </a>
      </SignUpMessageWrapper>
    </>
  );
};

export default SignUpMessage;
