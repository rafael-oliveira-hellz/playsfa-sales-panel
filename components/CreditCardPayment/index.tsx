import React from 'react';
import * as Styled from './styles';
import { CustomUser } from '../../types/CustomUser';
import { CardData } from '../../types/CardData';

interface IProps {
  onBrandChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customUser: CustomUser;
  cardPaymentTokenDTO: CardData;
}
export const CreditCardData = ({
  onChange,
  onBrandChange,
  handleName,
  customUser,
  cardPaymentTokenDTO
}: IProps) => {
  return (
    <>
      <Styled.CreditCardDataWrapper>
        <h2>Dados do Cartão de Crédito</h2>
        <label htmlFor='grid-cardNumber'>
          Número do Cartão (Apenas números)
          <input
            id='grid-cardNumber'
            type='text'
            name='number'
            placeholder='4050258545856585'
            value={cardPaymentTokenDTO.number}
            onChange={(event) => onBrandChange(event)}
            minLength={13}
            maxLength={16}
            required
            autoFocus
          />
        </label>
        <label htmlFor='grid-name'>
          Nome do Titular (igual ao cartão)
          <input
            id='grid-name'
            type='text'
            name='name'
            placeholder='John Doe'
            value={customUser.name}
            onChange={(event) => handleName(event)}
            minLength={3}
            required
          />
        </label>
        <label htmlFor='grid-expiryMonth'>
          Mês de Expiração
          <input
            id='grid-expiryMonth'
            type='text'
            placeholder='MM'
            name='expiration_month'
            value={cardPaymentTokenDTO.expiration_month}
            minLength={2}
            maxLength={2}
            onChange={(event) => onChange(event)}
            required
          />
        </label>
        <label htmlFor='grid-expiryYear'>
          Ano de Expiração
          <input
            id='grid-expiryYear'
            type='text'
            name='expiration_year'
            placeholder='2035'
            value={cardPaymentTokenDTO.expiration_year}
            onChange={(event) => onChange(event)}
            minLength={4}
            maxLength={4}
            required
          />
        </label>
        <label htmlFor='grid-cvv'>
          CVV
          <input
            id='grid-cvv'
            type='text'
            name='cvv'
            value={cardPaymentTokenDTO.cvv}
            placeholder='754'
            minLength={3}
            maxLength={4}
            onChange={(event) => onChange(event)}
            required
          />
        </label>
        <label htmlFor='grid-cpf'>
          CPF (Apenas número)
          <input
            id='grid-cpf'
            type='text'
            name='cpf'
            placeholder='12345678900'
            value={customUser.cpf}
            onChange={(event) => handleName(event)}
            minLength={11}
            maxLength={11}
            required
          />
        </label>
      </Styled.CreditCardDataWrapper>
    </>
  );
};
