import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { connect, disconnect } from "../../hooks/websocket-client";
import { Plan } from "../../types/Plan";
import { UserContextData } from "../../types/User";
import { PixPaymentLoading } from "../PixLoader";
import Payment from "../WaitingPayment";
import * as Styled from "./styles";
interface IProps {
  selectedPlan: Plan;
  user: UserContextData;
}
export const PixPayment = ({ selectedPlan, user }: IProps) => {
  const [cpf, setCpf] = useState("");
  const [qr, setQr] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
    invalidCpf: false,
  });
  const [loading, setLoading] = useState(false);
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
      }, 3000);
    }
  };

  const generatePix = useCallback(
    async (email: string, plan: Plan, cpf: string) => {
      try {
        setLoading(true);

        const cleanCpf = cpf.replace(/[^\d]/g, "");

        if (!cleanCpf || !email) {
          setError({
            status: true,
            message: "E-mail/CPF inválido!",
            invalidCpf: true,
          });
          return;
        }

        const body = { email, plan, cpf: cleanCpf };

        setLoader(true);

        try {
          // const timer = setTimeout(async () => {
          const res = await axios.post(
            "https://api.comprar.vip/plans/pix/requestData",
            {
              ...body,
            }
          );

          setQr(res.data.qrcode.qrcode);
          setQrcodeReceived(true);
          setConfirmed(false);
          setLoader(false);
          setShowModal(true);
          // }, 3000);
          // return () => {
          //   clearTimeout(timer);
          // };
        } catch (error: any) {
          setError({
            status: true,
            message: Array.isArray(error.response.data)
              ? error.response.data[0].defaultMessage
              : error.response.data.message,
            invalidCpf: Array.isArray(error.response.data),
          });
          setLoading(false);
          window.location.href = "/404";
        }
      } catch (error: any) {
        if (error.response) {
          setError({
            status: true,
            message: Array.isArray(error.response.data)
              ? error.response.data[0].defaultMessage
              : error.response.data.message,
            invalidCpf: Array.isArray(error.response.data),
          });
        }
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const acceptedResponses = [
      "PAGAMENTO RECEBIDO",
      "ENTREGA DO PREMIUM EM ANDAMENTO",
      "ENTREGA DO PREMIUM CONCLUIDA",
    ];

    const connectCallback = (paymentResponse: string) => {
      console.log("Resposta do pagamento recebida: " + paymentResponse);
      setPaymentConfirmation(paymentResponse);
      setConfirmed(acceptedResponses.includes(paymentResponse));
    };

    connect(connectCallback, "pix", user.user.id.toString(), (event: any) => {
      console.log("Conexão com o websocket estabelecida!");
      console.log("Evento: " + event);
    });

    return () => {
      disconnect();
    };
  }, [user.user.id]);

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
            {error.invalidCpf && <p>CPF inválido</p>}
          </label>
          <label htmlFor="mail">
            E-MAIL
            <input
              id="mail"
              type="email"
              value={user?.user.email}
              disabled
              style={{ width: "20vw" }}
            />
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
          <Payment
            accepted={true}
            paymentConfirmationStatus={paymentConfirmation}
            handleCloseModal={handleCloseModal}
            showModal={showModal}
          />
        ) : (
          <Payment
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
