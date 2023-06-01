import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import { Plan } from '../../types/Plan';
import { UserContextData } from '../../types/User';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { connect, disconnect, } from '../../hooks/websocket-client';

export async function getServerSideProps() {
  const initialData = await fetch("http://localhost:8000/handler-initial-data").then(x => x.json());
  return {props: {data: initialData}}
}

interface IProps {
  selectedPlan: Plan;
  user: UserContextData;
}
export const PixPayment = ({ selectedPlan, user }: IProps) => {
  const [cpf, setCpf] = useState('');
  const [qr, setQr] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [invalidCpf, setInvalidCpf] = useState(false);

  const generatePix = async (email: string, plan: Plan, cpf: string) => {
    try {
      setLoading(true);
      if (!cpf || !email) {
        setError(true);
      }

      const body = { email, plan, cpf };
      console.log({ ...body });
      await axios
        .post('https://api.comprar.vip/plans/pix/requestData', {
          ...body
        })
        .then((res: any) => {
          console.log(res.data);
          setQr(res.data.qrcode.qrcode);
        });
    } catch (error: any) {
      if (error.response) {
        console.error('Mensagem de Erro: ', error.response);

        setError(true);

        if (Array.isArray(error.response.data)) {
          setErrorMessage(error.response.data[0].defaultMessage);
          setInvalidCpf(true);
        } else {
          setErrorMessage(error.response.data.message);
          setInvalidCpf(false);
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    connect(
      (paymentResponse: string) => {
        console.log('Resposta do pagamento recebida: ' + paymentResponse);
      },
      "pix"
    );
  }, []);

  return (
    <>
      <Styled.PixPaymentWrapper>
        <h2>Formulário para Preenchimento dos dados PIX!</h2>
        <div className='inputs-wrapper'>
          <label htmlFor='cpf'>
            CPF
            <input
              id='cpf'
              type='text'
              value={cpf}
              placeholder='00000000000'
              onChange={(e) => setCpf(e.target.value)}
            />
            {invalidCpf && <p>CPF inválido</p>}
          </label>
          <label htmlFor='mail'>
            E-MAIL
            <input id='mail' type='email' value={user.user.email} disabled />
          </label>
        </div>
        <button
          type='button'
          onClick={() => generatePix(user.user.email, selectedPlan, cpf)}
        >
          Gerar Pix
        </button>
      </Styled.PixPaymentWrapper>
      {qr !== '' ? (
        <QRCode
          value={qr}
          size={150}
          style={{ position: 'absolute', paddingTop: '2rem' }}
        />
      ) : (
        ''
      )}
    </>
  );
};
