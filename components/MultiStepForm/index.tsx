import axios from "axios";
import cardValidator from "card-validator";
import React, { useEffect, useReducer, useState } from "react";
import { FiSend } from "react-icons/fi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { connect, disconnect } from "../../hooks/websocket-client";
import {
  CardData,
  CustomAddress,
  CustomUser,
  Plan,
  UserContextData,
} from "../../types/";
import { CreditCardData } from "../CreditCardPayment";
import { AddressData } from "../CreditCardPayment/AddressData";
import { ClientData } from "../CreditCardPayment/ClientData";
import { RecurrencyData } from "../CreditCardPayment/RecurrencyData";
import { useForm } from "../Hooks/useForm";
import { PaymentLoading } from "../PaymentLoading";
import Payment from "../WaitingPayment";
import * as Styled from "./styles";
import { Thanks } from "./Thanks";

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
  const [error, setError] = useState({
    status: false,
    message: "",
    invalidCpf: false,
  });

  const initialState = {
    customUser: {
      name: "",
      cpf: "",
      phone: "",
      email: user.user.email,
      birth_date: "",
    },

    customAddress: {
      street: "",
      number: "",
      neighborhood: "",
      cep: "",
      city: "",
      state: "",
    },
    cardPaymentTokenDTO: {
      brand: "",
      number: "",
      cvv: "",
      expiration_month: "",
      expiration_year: "",
    },
  };

  interface FormState {
    customUser: CustomUser;
    customAddress: CustomAddress;
    cardPaymentTokenDTO: CardData;
  }
  type FormAction =
    | { type: "UPDATE_CUSTOM_USER"; payload: Partial<CustomUser> }
    | { type: "UPDATE_CUSTOM_ADDRESS"; payload: Partial<CustomAddress> }
    | { type: "UPDATE_CARD_PAYMENT_TOKEN"; payload: Partial<CardData> };

  const reducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
      case "UPDATE_CUSTOM_USER":
        return {
          ...state,
          customUser: { ...state.customUser, ...action.payload },
        };
      case "UPDATE_CUSTOM_ADDRESS":
        return {
          ...state,
          customAddress: { ...state.customAddress, ...action.payload },
        };
      case "UPDATE_CARD_PAYMENT_TOKEN":
        return {
          ...state,
          cardPaymentTokenDTO: {
            ...state.cardPaymentTokenDTO,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { customUser, customAddress, cardPaymentTokenDTO } = state;

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let updatedValue = value;

    if (name === "phone" || name === "cpf") {
      updatedValue = value.replaceAll(/[^\w\s]|_/g, "").replaceAll(/\s+/g, "");
    }
    dispatch({ type: "UPDATE_CUSTOM_USER", payload: { [name]: updatedValue } });
  };

  const handleCreditCardDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    let updatedValue = value;

    if (name === "number") {
      updatedValue = value.replace(/[^0-9]/g, "");
    }

    dispatch({
      type: "UPDATE_CARD_PAYMENT_TOKEN",
      payload: { [name]: updatedValue },
    });
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_CUSTOM_USER",
      payload: { [event.target.name]: event.target.value },
    });
  };
  const handleCustomAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    let updatedValue = value;

    if (name === "number" || name === "cep") {
      updatedValue = value.replace(/[^0-9]/g, "");
    }

    dispatch({
      type: "UPDATE_CUSTOM_ADDRESS",
      payload: { [name]: updatedValue },
    });
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

    dispatch({
      type: "UPDATE_CARD_PAYMENT_TOKEN",
      payload: { [name]: value, brand },
    });
  };

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
      const cleanedUser = {
        ...customUser,
        cpf: customUser.cpf?.replace(/[^\d]/g, "") || "",
        phone: customUser.phone?.replace(/[^\d]/g, "") || "",
      };

      const body = {
        recurrency: opcaoSelecionada,
        customUser: cleanedUser,
        customAddress: customAddress,
        plan: selectedPlan,
        cardPaymentTokenDTO: cardPaymentTokenDTO,
      };

      setLoading(true);

      setTimeout(async () => {
        try {
          await axios
            .post("https://api.comprar.vip/card/transaction", {
              ...body,
            })
            .then(() => {
              setLoading(false);
              setShowModal(true);
            });
        } catch (error: any) {
          setError({
            status: true,
            message:
              "Ocorreu um erro ao processar o pagamento. Verifique os dados informados e tente novamente.",
            invalidCpf: false,
          });

          setLoading(false);
          window.location.href = "/404";
        }
      }, 3000);
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

    connect(connectCallback, "card", user.user.id.toString(), (event: any) => {
      console.log("Conexão com o websocket estabelecida!");
      console.log("Evento: " + event);
    });

    return () => {
      disconnect();
    };
  }, [user.user.id]);

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
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
