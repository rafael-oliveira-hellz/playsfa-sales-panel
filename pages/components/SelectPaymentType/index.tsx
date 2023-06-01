import React, { useState } from 'react';
import * as Styled from './styles';
import { PixPayment } from '../../../components/PixPayment';
import { MultiStepForm } from '../../../components/MultiStepForm';
import { useLocation } from 'react-router-dom';

export default function ChoosePayment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    'PIX' | 'CARTÃO DE CRÉDITO'
  >('PIX');

  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;
  const user = location.state?.userData;

  const handlePay = (paymentMethod: string) => {
    if (paymentMethod === 'PIX') {
      setSelectedPaymentMethod('PIX');
    } else {
      setSelectedPaymentMethod('CARTÃO DE CRÉDITO');
    }
  };

  const renderPaymentForm = () => {
    if (selectedPaymentMethod === 'PIX') {
      return <PixPayment selectedPlan={selectedPlan} user={user} />;
    } else {
      return <MultiStepForm selectedPlan={selectedPlan} user={user} />;
    }
  };

  return (
    <>
      <Styled.ChoosePaymentWrapper>
        <h2>Escolha a forma de Pagamento</h2>
        <form>
          <div className='wrapper'>
            <div className='wrapper__pix'>
              <label htmlFor='pix'>PIX</label>
              <input
                type='radio'
                name='payment'
                id='pix'
                value='PIX'
                defaultChecked={selectedPaymentMethod === 'PIX'}
                onChange={() => handlePay('PIX')}
              />
            </div>
            <div className='wrapper__card'>
              <input
                type='radio'
                name='payment'
                id='card'
                value='CARTÃO DE CRÉDITO'
                defaultChecked={selectedPaymentMethod === 'CARTÃO DE CRÉDITO'}
                onChange={() => handlePay('CARTÃO DE CRÉDITO')}
              />
              <label htmlFor='card'>Cartão de Crédito</label>
            </div>
          </div>
        </form>
        {renderPaymentForm()}
      </Styled.ChoosePaymentWrapper>
    </>
  );
}
