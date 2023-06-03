import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { ClientData } from "../CreditCardPayment/ClientData";
import { CreditCardData } from "../CreditCardPayment";
import { Thanks } from "./Thanks";
import { AddressData } from "../CreditCardPayment/AddressData";
import { RecurrencyData } from "../CreditCardPayment/RecurrencyData";
import { FiSend } from "react-icons/fi";
import { useForm } from "../Hooks/useForm";
import {
  CardData,
  Plan,
  UserContextData,
  CustomUser,
  CustomAddress,
} from "../../types/";
import { PaymentLoading } from "../PaymentLoading";
import cardValidator from "card-validator";
import axios, { AxiosResponse } from "axios";
import { connect, disconnect } from "../../hooks/websocket-client";
import { WaitingPayment } from "../WaitingPayment";

interface IProps {
  selectedPlan: Plan;
  user: UserContextData;
}
export const MultiStepForm = ({ selectedPlan, user }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentConfirmation, setPaymentConfirmation] = useState("");
  const [selectRadio, setSelectRadio] = useState<"Sim" | "Não">("Não");
  const [isRecurrency, setIsRecurrency] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("");
  const [confirmed, setConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [cardPaymentTokenDTO, setCardPaymentTokenDTO] = useState<CardData>({
    brand: "",
    number: "",
    cvv: "",
    expiration_month: "",
    expiration_year: "",
  });

  const [customUser, setCustomUser] = useState<CustomUser>({
    name: "",
    cpf: "",
    phone: "",
    email: user.user.email,
    birth_date: "",
  });

  const [customAddress, setCustomAddress] = useState<CustomAddress>({
    street: "",
    number: "",
    neighborhood: "",
    cep: "",
    city: "",
    state: "",
  });

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === "phone" || name === "cpf") {
      updatedValue = value.replaceAll(/[^\w\s]|_/g, "").replaceAll(/\s+/g, "");
    }

    setCustomUser({ ...customUser, [name]: updatedValue });
  };

  const handleCreditCardDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === "number") {
      updatedValue = value.replace(/[^0-9]/g, "");
    }

    setCardPaymentTokenDTO((prevState) => ({
      ...prevState,
      [name]: updatedValue,
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

    if (name === "number" || name === "cep") {
      updatedValue = value.replace(/[^0-9]/g, "");
    }
    setCustomAddress((prevState) => ({
      ...prevState,
      [name]: updatedValue,
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
    const brand = cardValidation.card?.type || "";

    setCardPaymentTokenDTO((prevState) => ({
      ...prevState,
      [name]: value,
      brand,
    }));
  };

  // ================================================
  const onRadioSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    if (event === "Sim") {
      setIsRecurrency(true);
      setSelectRadio("Sim");
      setOpcaoSelecionada("30");
    }
    if (event === "Não") {
      setIsRecurrency(false);
      setSelectRadio("Não");
      setOpcaoSelecionada("0");
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
        cardPaymentTokenDTO: cardPaymentTokenDTO,
      };

      setLoading(true);
      setTimeout(async () => {
        await axios
        .post("https://api.comprar.vip/card/transaction", {
          ...body,
        })
        .then(() => {
          setLoading(false);
          setShowModal(true);
        });
      }, 10000);
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
      key={1}
    />,
    <ClientData
      email={user.user.email}
      birth_date={customUser.birth_date}
      phone={customUser.phone}
      onChange={handleUserChange}
      key={1}
    />,
    <AddressData
      onAddressChange={handleCustomAddressChange}
      customAddress={customAddress}
      key={1}
    />,
    <RecurrencyData
      onRadioSelect={onRadioSelect}
      isRecurrency={isRecurrency}
      handleSelection={handleSelection}
      opcaoSelecionada={opcaoSelecionada}
      key={1}
    />,
    <Thanks loading={loading} key={1} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

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
    }, "card", user.user.id.toString());
  }, [paymentConfirmation, user.user.id]);

  return (
    <>
      <Styled.FormContainer>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="actions">
            <div className="inputs-container">{currentComponent}</div>
            <div className="button-wrapper">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious style={{ alignSelf: "center" }} />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext
                    style={{ color: "white !important", alignSelf: "center" }}
                  />
                </button>
              ) : (
                <button
                  type="submit"
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
      {paymentConfirmation && (
        <div className="modal">
          <div className="modal-content">
            {confirmed ? (
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
          />
        )}
          </div>
        </div>
      )}
    </>
  );
};
