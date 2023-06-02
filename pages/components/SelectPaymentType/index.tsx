import React, { useContext, useState } from "react";
import * as Styled from "./styles";
import { PixPayment } from "../../../components/PixPayment";
import { MultiStepForm } from "../../../components/MultiStepForm";
import { useRouter } from "next/router";
import { PlanContext, UserContext } from "../../../contexts/Provider";
import { Plan, UserContextData } from "../../../types";

export default function ChoosePayment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "PIX" | "CARTÃO DE CRÉDITO"
  >("PIX");

  const router = useRouter();

  const planContext = useContext(PlanContext);
  const userContext = useContext(UserContext);

  if (!planContext || !userContext) {
    console.error("A context was not found");
    return null;
  }

  const { selectedPlan } = planContext;
  const { user } = userContext;

  if (!selectedPlan) {
    console.error("A plan was not found");
    router.push("/");
  } else if (!user) {
    console.error("A user was not found");
    router.push("/checkout");
  }

  const handlePay = (paymentMethod: string) => {
    if (paymentMethod === "PIX") {
      setSelectedPaymentMethod("PIX");
    } else {
      setSelectedPaymentMethod("CARTÃO DE CRÉDITO");
    }
  };

  const renderPaymentForm = () => {
    if (selectedPaymentMethod === "PIX") {
      return (
        <PixPayment
          selectedPlan={selectedPlan as Plan}
          user={user as UserContextData}
        />
      );
    } else {
      return (
        <MultiStepForm
          selectedPlan={selectedPlan as Plan}
          user={user as UserContextData}
        />
      );
    }
  };

  return (
    <>
      <Styled.ChoosePaymentWrapper>
        <h2>Escolha a forma de Pagamento</h2>
        <form className="payment-select">
          <div className="wrapper">
            <div className="wrapper__pix">
              <label htmlFor="pix">PIX</label>
              <input
                type="radio"
                name="payment"
                id="pix"
                value="PIX"
                defaultChecked={selectedPaymentMethod === "PIX"}
                onChange={() => handlePay("PIX")}
              />
            </div>
            <div className="wrapper__card">
              <input
                type="radio"
                name="payment"
                id="card"
                value="CARTÃO DE CRÉDITO"
                defaultChecked={selectedPaymentMethod === "CARTÃO DE CRÉDITO"}
                onChange={() => handlePay("CARTÃO DE CRÉDITO")}
              />
              <label htmlFor="card">Cartão de Crédito</label>
            </div>
          </div>
        </form>
        {renderPaymentForm()}
      </Styled.ChoosePaymentWrapper>
    </>
  );
}
