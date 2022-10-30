import Image from 'next/image';
import PagarMP from '../assets/pagar-mp.png';

const MercadoPagoBtn = () => {
  return (
    <>
      <Image src={PagarMP} alt='Pagar com Mercado Pago' />
    </>
  );
}

export default MercadoPagoBtn;