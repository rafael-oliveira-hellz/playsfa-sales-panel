import React, { useContext, useEffect, useState } from "react";
import MainPageWrapper from "./styles";
// import { useNavigate } from 'react-router-dom';
import { Plan } from "../../../types/Plan";
import { Cards } from "../../../components/Cards";
import { MainLoading } from "../../../components/MainLoading";
import { PlanContext } from "../../../contexts/Provider";
import { useRouter } from "next/router";

export default function MainPage({ plans }: { plans: Plan[] }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [newPlans, setPlans] = useState<Plan[]>();

  const router = useRouter();

  useEffect(() => {
    setPlans(plans);
  }, [plans, error, loading]);

  const planContext = useContext(PlanContext);

  if (!planContext) {
    return null;
  }

  const { selectedPlan, setSelectedPlan } = planContext;

  const handleClick = (plan: Plan) => {
    setSelectedPlan(plan);

    sessionStorage.setItem("selectedPlan", JSON.stringify(plan));

    router.push("/checkout");
  };

  return (
    <>
      <MainPageWrapper>
        <section className="content-wrapper">
          <div className="content-wrapper__title-wrapper">
            <h2>Escolha o seu plano</h2>
          </div>
          <section className="content-wrapper__boxes-wrapper">
            {newPlans?.map((plan) => (
              <Cards
                plans={[plan]}
                key={plan.id + plan.billet_price + plan.pack_duration}
                onButtonClick={() => handleClick(plan)}
              />
            ))}
          </section>
        </section>
      </MainPageWrapper>
      {loading ? <MainLoading /> : <MainLoading className="closing" />}
    </>
  );
}
