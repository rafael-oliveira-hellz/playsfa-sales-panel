import { useContext } from "react";
import { ChoosenPlan } from "../components/ChoosenPlan";
import { PlanContext } from "../contexts/Provider";

export default function Checkout() {
  return (
    <>
      <ChoosenPlan />
    </>
  );
}
