import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { Plan } from "../../types/Plan";
import { UserContextData } from "../../types/User";
import axios from "axios";
import { PixPaymentLoading } from "../PixLoader";
import { connect } from "../../hooks/websocket-client";
import { WaitingPayment } from "../WaitingPayment";

interface IProps {
  selectedPlan: Plan;
  user: UserContextData;
}

export const PixPayment = ({ selectedPlan, user }: IProps) => {
  const [cpf, setCpf] = useState("");
  const [qr, setQr] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [invalidCpf, setInvalidCpf] = useState(false);
  const [loader, setLoader] = useState(false);
  const [paymentConfirmation, setPaymentConfirmation] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [qrcodeReceived, setQrcodeReceived] = useState(false);

  const generatePix = async (email: string, plan: Plan, cpf: string) => {
    try {
      setLoading(true);
      if (!cpf || !email) {
        setError(true);
        return;
      }

      const body = { email, plan, cpf };
      console.log({ ...body });
      setLoader(true);
      const res = await axios.post(
        "https://api.comprar.vip/plans/pix/requestData",
        {
          ...body,
        }
      );
      console.log(res.data);
      setQr(res.data.qrcode.linkVisualizacao);
      window.open(res.data.qrcode.linkVisualizacao, "_blank");
      setQrcodeReceived(true);
      setConfirmed(false);
      setLoader(false);
    } catch (error: any) {
      if (error.response) {
        console.error("Mensagem de Erro: ", error.response);

        setError(true);

        if (Array.isArray(error.response.data)) {
          setErrorMessage(error.response.data[0].defaultMessage);
          setInvalidCpf(true);
        } else {
          setErrorMessage(error.response.data.message);
          setInvalidCpf(false);
        }
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    connect((paymentResponse: string) => {
      console.log("Resposta do pagamento recebida: " + paymentResponse);

      setPaymentConfirmation(paymentResponse);

      if (paymentConfirmation === "PAGAMENTO RECEBIDO" || paymentResponse === "PAGAMENTO RECEBIDO") {
        setConfirmed(true);
      }

    }, "pix");
    console.log(paymentConfirmation);
  }, [paymentConfirmation]);

  useEffect(() => {
    if (qrcodeReceived) {
      setConfirmed(false);
    }
  }, [qrcodeReceived]);

  return (
    <>
      <Styled.PixPaymentWrapper>
        <h2>Formulário para Preenchimento dos dados PIX!</h2>
        <div className="inputs-wrapper">
          <label htmlFor="cpf">
            CPF
            <input
              id="cpf"
              type="text"
              value={cpf}
              placeholder="00000000000"
              onChange={(e) => setCpf(e.target.value)}
            />
            {invalidCpf && <p>CPF inválido</p>}
          </label>
          <label htmlFor="mail">
            E-MAIL
            <input id="mail" type="email" value={user?.user.email} disabled />
          </label>
        </div>
        <button
          type="button"
          onClick={() => generatePix(user.user.email, selectedPlan, cpf)}
        >
          Gerar Pix
        </button>
      </Styled.PixPaymentWrapper>
      {loader ? (
        <PixPaymentLoading />
      ) : (
        <PixPaymentLoading className="closing" />
      )}

      {qrcodeReceived ? (
        confirmed ? (
          <WaitingPayment
            accepted={true}
            paymentConfirmationStatus={paymentConfirmation}
          />
        ) : (
          <WaitingPayment paymentConfirmationStatus={paymentConfirmation} />
        )
      ) : null}
    </>
  );
};
