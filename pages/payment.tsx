import { useRouter } from "next/router";
import { useContext } from "react";
import { PlanContext, UserContext } from "../contexts/Provider";
import ChoosePayment from "./components/SelectPaymentType";

export default function Payment() {
  const router = useRouter();

  const planContext = useContext(PlanContext);
  const userContext = useContext(UserContext);

  if (!planContext || !userContext) {
    return null;
  }

  const { selectedPlan } = planContext;
  const { user } = userContext;

  if (!selectedPlan) {
    router.push('/');
  } else if (!user) {
    router.push('/checkout');
  }

    return (
        <>
            <ChoosePayment />
        </>
    );
}