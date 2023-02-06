import Image from 'next/image';
import AppStore from '../assets/google-play-logo.png';
import QRCode from '../assets/qr-code-styling.png';
import SignUpMessageWrapper from './styles/SignUpMessageWrapper.style';

type Props = {
  error?: string | null;
  cpf?: string | null;
}

const SignUpMessage = ({error, cpf}: Props) => {
  return (
    <>
      <SignUpMessageWrapper>
        {error && cpf ? (
          <>
          <p className='toggle-hide-qr'>{error}</p>
          <p className='toggle-hide-app'>{error}</p>

          <Image
          className='toggle-hide-qr'
          src={QRCode}
          alt='QR Code para cadastro de novos usuários'
        />
        <a
          className='toggle-hide-app'
          href='https://play.google.com/store/apps/details?id=com.psaappsa'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={AppStore} alt='Imagem com link para Google App Store' />
        </a>
          </>
        ) : error && !cpf ? (
          <>
            <p className='toggle-hide-qr'>{error}</p>
            <p className='toggle-hide-app'>{error}</p>
          </>
        ) : (
          <>
          <p className='toggle-hide-qr'>
          E-mail inválido! Não possui uma conta? Faça a leitura do nosso QR Code
          e cadastre-se!
        </p>
        <p className='toggle-hide-app'>
          E-mail inválido! Não possui uma conta? Baixe nosso aplicativo na App Store!
        </p>
        <Image
          className='toggle-hide-qr'
          src={QRCode}
          alt='QR Code para cadastro de novos usuários'
        />
        <a
          className='toggle-hide-app'
          href='https://play.google.com/store/apps/details?id=com.psaappsa'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={AppStore} alt='Imagem com link para Google App Store' />
        </a>
        </>
        )}
      </SignUpMessageWrapper>
    </>
  );
};

export default SignUpMessage;
