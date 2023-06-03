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
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);

    if (paymentConfirmation === "ENTREGA DO PREMIUM CONCLUIDA") {
      setTimeout(() => {
        sessionStorage.clear();
        window.location.href = "/";
      }
      , 3000);
    }
  };

  const openPixLink = (link: string) => {
    const newWindow = window.open(link, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const generatePix = async (email: string, plan: Plan, cpf: string) => {
    try {
      setLoading(true);

      if (!cpf || !email) {
        setError(true);
        return;
      }

      const body = { email, plan, cpf };

      setLoader(true);
      setTimeout(async () => {
        const res = await axios.post(
          "https://api.comprar.vip/plans/pix/requestData",
          {
            ...body,
          }
        );
        setQr(res.data.qrcode.qrcode);
        openPixLink(res.data.qrcode.linkVisualizacao);
        setQrcodeReceived(true);
        setConfirmed(false);
        setLoader(false);
        setShowModal(true);
      }, 10000);
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

      if (paymentConfirmation === "PAGAMENTO RECEBIDO" || paymentResponse === "PAGAMENTO RECEBIDO" ||
        paymentConfirmation === "ENTREGA DO PREMIUM EM ANDAMENTO" || paymentResponse === "ENTREGA DO PREMIUM EM ANDAMENTO"
        || paymentConfirmation === "ENTREGA DO PREMIUM CONCLUIDA" || paymentResponse === "ENTREGA DO PREMIUM CONCLUIDA") {
        setConfirmed(true);
      } else if (paymentConfirmation === "FALHA NA TRANSAÇÃO" || paymentResponse === "FALHA NA TRANSAÇÃO"
        || paymentConfirmation === "AGUARDANDO CONFIRMAÇÃO DO PAGAMENTO" || paymentResponse === "AGUARDANDO CONFIRMAÇÃO DO PAGAMENTO"
        || paymentConfirmation === "AGUARDANDO PAGAMENTO" || paymentResponse === "AGUARDANDO PAGAMENTO") {
        setConfirmed(false);
      }

    }, "pix");
  }, [paymentConfirmation, confirmed]);

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
            handleCloseModal={handleCloseModal}
            showModal={showModal}
          />
        ) : (
          <WaitingPayment
            accepted={false}
            paymentConfirmationStatus={paymentConfirmation}
            handleCloseModal={handleCloseModal}
            showModal={showModal}
            type="pix"
            pixLink={qr}
          />
        )
      ) : null}
    </>
  );
};
