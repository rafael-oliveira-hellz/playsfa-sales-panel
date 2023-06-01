import React from "react";
import * as Styled from "./styles";
import { CustomAddress } from "../../types/CustomAddress";
interface IProps {
  onAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customAddress: CustomAddress;
}
export const AddressData = ({ onAddressChange, customAddress }: IProps) => {
  return (
    <>
      <Styled.AddressDataWrapper>
        <h2>Dados de Endereço</h2>
        <label htmlFor="grid-rua">
          Rua
          <input
            id="grid-rua"
            type="text"
            name="street"
            placeholder="Rua um"
            value={customAddress.street}
            onChange={(event) => onAddressChange(event)}
            minLength={3}
            required
            autoFocus
          />
        </label>
        <label htmlFor="grid-numero">
          Número
          <input
            id="grid-numero"
            type="text"
            name="number"
            placeholder="305"
            value={customAddress.number}
            onChange={(event) => onAddressChange(event)}
            minLength={1}
            required
          />
        </label>
        <label htmlFor="grid-bairro">
          Bairro
          <input
            id="grid-bairro"
            type="text"
            name="neighborhood"
            placeholder="Das Flores"
            value={customAddress.neighborhood}
            onChange={(event) => onAddressChange(event)}
            minLength={5}
            required
          />
        </label>
        <label htmlFor="grid-cep">
          CEP
          <input
            id="grid-cep"
            type="text"
            name="cep"
            placeholder="12345678"
            value={customAddress.cep}
            minLength={8}
            maxLength={8}
            onChange={(event) => onAddressChange(event)}
            required
          />
        </label>
        <label htmlFor="grid-cidade">
          Cidade
          <input
            id="grid-cidade"
            type="text"
            name="city"
            placeholder="São Paulo"
            value={customAddress.city}
            minLength={3}
            onChange={(event) => onAddressChange(event)}
            required
          />
        </label>
        <label htmlFor="grid-estado">
          Estado
          <input
            id="grid-estado"
            type="text"
            name="state"
            placeholder="SP"
            value={customAddress.state}
            minLength={2}
            maxLength={2}
            onChange={(event) => onAddressChange(event)}
            required
          />
        </label>
      </Styled.AddressDataWrapper>
    </>
  );
};
