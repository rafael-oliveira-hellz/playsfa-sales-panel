import React, { useState } from 'react';
import * as Styled from './styles';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { ClientData } from '../CreditCardPayment/ClientData';
import { CreditCardData } from '../CreditCardPayment';
import { Thanks } from './Thanks';
import { AddressData } from '../CreditCardPayment/AddressData';
import { RecurrencyData } from '../CreditCardPayment/RecurrencyData';
import { FiSend } from 'react-icons/fi';
import { useForm } from '../Hooks/useForm';
import {
  CardData,
  Plan,
  UserContextData,
  CustomUser,
  CustomAddress
} from '../../types/';
import { PaymentLoading } from '../PaymentLoading';
import cardValidator from 'card-validator';
import axios, { AxiosResponse } from 'axios';
import { randomUUID } from 'crypto';
interface IProps {
  selectedPlan: Plan;
  user: UserContextData;
}
export const MultiStepForm = ({ selectedPlan, user }: IProps) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [selectRadio, setSelectRadio] = useState<'Sim' | 'Não'>('Não');
  const [isRecurrency, setIsRecurrency] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>('');
  const [cardPaymentTokenDTO, setCardPaymentTokenDTO] =
    useState<CardData>({
      brand: '',
      number: '',
      cvv: '',
      expiration_month: '',
      expiration_year: ''
    });

  const [customUser, setCustomUser] = useState<CustomUser>({
    name: '',
    cpf: '',
    phone: '',
    email: user.user.email,
    birth_date: ''
  });

  const [customAddress, setCustomAddress] = useState<CustomAddress>({
    street: '',
    number: '',
    neighborhood: '',
    cep: '',
    city: '',
    state: ''
  });

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === 'phone' || name === 'cpf') {
      updatedValue = value.replaceAll(/[^\w\s]|_/g, '').replaceAll(/\s+/g, '');
    }

    setCustomUser({ ...customUser, [name]: updatedValue });
    console.log('handleUserChange: ', customUser.birth_date);
  };

  const handleCreditCardDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === 'number') {
      updatedValue = value.replace(/[^0-9]/g, '');
    }

    setCardPaymentTokenDTO((prevState) => ({
      ...prevState,
      [name]: updatedValue
    }));
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomUser({ ...customUser, [event.target.name]: event.target.value });
  };

  const handleCustomAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === 'number' || name === 'cep') {
      updatedValue = value.replace(/[^0-9]/g, '');

      console.log('updatedValue: ', updatedValue);
    }
    setCustomAddress((prevState) => ({
      ...prevState,
      [name]: updatedValue
    }));
  };

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOpcaoSelecionada(e.target.value);
  };

  const handleCreditCardBrand = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    const cardValidation = cardValidator.number(value);
    const brand = cardValidation.card?.type || '';

    setCardPaymentTokenDTO((prevState) => ({
      ...prevState,
      [name]: value,
      brand
    }));
  };

  // ================================================
  const onRadioSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    if (event === 'Sim') {
      setIsRecurrency(true);
      setSelectRadio('Sim');
      setOpcaoSelecionada('30');
    }
    if (event === 'Não') {
      setIsRecurrency(false);
      setSelectRadio('Não');
      setOpcaoSelecionada('0');
    }
  };

  const generatePayment = async (
    customUser: CustomUser,
    customAddress: CustomAddress,
    selectedPlan: Plan,
    opcaoSelecionada: string,
    cardPaymentTokenDTO: CardData
  ) => {
    try {
      const body = {
        recurrency: opcaoSelecionada,
        customUser,
        customAddress: customAddress,
        plan: selectedPlan,
        cardPaymentTokenDTO: cardPaymentTokenDTO
      };

      console.log('body: ', { ...body });

      setLoading(true);
      await axios
        .post('https://api.comprar.vip/card/transaction', {
          ...body
        })
        .then((res: AxiosResponse) => {
          console.log('AxiosResponse: ', res.data);
          setData(res.data);
          setLoading(false);

          if (res.status === 0) {
            setLoading(false);
          } else if (res.status > 199 || res.status < 400) {
            setLoading(false);
          } else if (res.status > 400) {
            setLoading(false);
          }
        });
    } catch (error: any) {
      console.log(error);
    }
  };
  const formComponents = [
    <CreditCardData
      customUser={customUser}
      cardPaymentTokenDTO={cardPaymentTokenDTO}
      onChange={handleCreditCardDataChange}
      onBrandChange={handleCreditCardBrand}
      handleName={handleName}
      key={randomUUID()}
    />,
    <ClientData
      email={user.user.email}
      birth_date={customUser.birth_date}
      phone={customUser.phone}
      onChange={handleUserChange}
      key={randomUUID()}
    />,
    <AddressData
      onAddressChange={handleCustomAddressChange}
      customAddress={customAddress}
      key={randomUUID()}
    />,
    <RecurrencyData
      onRadioSelect={onRadioSelect}
      isRecurrency={isRecurrency}
      handleSelection={handleSelection}
      opcaoSelecionada={opcaoSelecionada}
      key={randomUUID()}
    />,
    <Thanks loading={loading} key={randomUUID()} />
  ];
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);
  return (
    <>
      <Styled.FormContainer>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)} noValidate>
          <div className='actions'>
            <div className='inputs-container'>{currentComponent}</div>
            <div className='button-wrapper'>
              {!isFirstStep && (
                <button
                  type='button'
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type='submit'>
                  <span>Avançar</span>
                  <GrFormNext style={{ color: 'white !important' }} />
                </button>
              ) : (
                <button
                  type='submit'
                  onClick={() =>
                    generatePayment(
                      customUser,
                      customAddress,
                      selectedPlan,
                      opcaoSelecionada,
                      cardPaymentTokenDTO
                    )
                  }
                >
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </div>
        </form>
      </Styled.FormContainer>
      {loading && <PaymentLoading />}
    </>
  );
};
