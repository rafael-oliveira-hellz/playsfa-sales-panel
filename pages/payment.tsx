import { useRouter } from "next/router";
import { useContext } from "react";
import { PlanContext, UserContext } from "../contexts/Provider";
import ChoosePayment from "./components/SelectPaymentType";

export default function Payment() {
  const router = useRouter();

  const planContext = useContext(PlanContext);
  const userContext = useContext(UserContext);

  if (!planContext || !userContext) {
    console.error('A context was not found');
    return null;
  }

  const { selectedPlan } = planContext;
  const { user } = userContext;

  if (!selectedPlan) {
    console.error('A plan was not found');
    router.push('/');
  } else if (!user) {
    console.error('A user was not found');
    router.push('/checkout');
  }

  console.log(selectedPlan);
  console.log(user);

    return (
        <>
            <ChoosePayment />
        </>
    );
}