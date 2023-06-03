import React, { useContext, useState } from "react";
import * as Styled from "./styles";
import { Cards } from "../Cards";
import { UsersDataForm } from "../UsersDataForm";
import { Plan } from "../../types/Plan";
import { UserContextData } from "../../types/User";
import { PlanContext, UserContext } from "../../contexts/Provider";
import { useRouter } from "next/router";

export const ChoosenPlan = () => {
  const [click, setClick] = useState(true);

  const router = useRouter();

  const planContext = useContext(PlanContext);
  const userContext = useContext(UserContext);

  if (!planContext || !userContext) {
    return null;
  }

  const selectedPlan = sessionStorage.getItem("selectedPlan");

  const JSONSelectedPlan = JSON.parse(selectedPlan as string);

  const { user, setUser } = userContext;

  if (!selectedPlan) {
    router.push("/");
  }

  const handleSearchSuccess = (data: UserContextData) => {
    setUser(data);
  };

  const handleClick = () => {
    setClick(!click);

    if (user) {
      router.push("/payment");
    }
  };

  return (
    <>
      <Styled.ChoosenPlanWrapper>
        <section className="plan-cards-wrapper">
          <div className="title-wrapper">
            <h2>Plano Escolhido</h2>
          </div>
          <div className="plan-cards">
            <Cards
              showModal={click}
              setShowModal={setClick}
              plans={[JSONSelectedPlan]}
              onButtonClick={handleClick}
              buttonStyle={{
                fontSize: "1.7rem",
                wordBreak: "break-all",
                minHeight: "100%",
                height: "100%",
                width: "100%",
                maxWidth: "31.4rem",
              }}
            />
          </div>
        </section>
        <section className="user-search">
          <div className="title-wrapper">
            <h2>Usuário</h2>
          </div>
          <UsersDataForm onSearchSuccess={handleSearchSuccess} />
        </section>
      </Styled.ChoosenPlanWrapper>
    </>
  );
};
