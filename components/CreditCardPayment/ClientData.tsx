import React from "react";
import * as Styled from "./styles";
import { CustomUser } from "../../types/CustomUser";

interface IProps {
  email: CustomUser["email"];
  birth_date: CustomUser["birth_date"];
  phone: CustomUser["phone"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const ClientData = ({
  email,
  birth_date,
  phone,
  onChange,
}: IProps): JSX.Element => {
  return (
    <>
      <Styled.ClientDataWrapper>
        <h2>Dados do Cliente</h2>
        <label htmlFor="grid-email">
          E-mail
          <input id="grid-email" type="email" value={email} disabled />
        </label>
        <label htmlFor="grid-celular">
          Celular
          <input
            id="grid-celular"
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => onChange(event)}
            placeholder="11987654321"
            minLength={11}
            maxLength={11}
            required
            autoFocus
          />
        </label>
        <label id="nasc" htmlFor="grid-nasc">
          Data de Nascimento
          <input
            id="grid-nasc"
            name="birth_date"
            type="date"
            value={birth_date}
            placeholder="DD/MM/YYYY"
            onChange={(event) => onChange(event)}
            required
          />
        </label>
      </Styled.ClientDataWrapper>
    </>
  );
};
