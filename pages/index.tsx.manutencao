import { Plan } from "../types/Plan";
import MainPage from "./components/Main";

export async function getStaticProps() {
  const plansUrl = "https://psadns.xyz/plans.php";

  const plansResponse = await fetch(plansUrl);

  const plans: Plan[] = await plansResponse.json();

  return {
    props: {
      plans,
    },
  };
}

type Props = {
  plans: Plan[];
};

export default function Home({ plans }: Props) {
  return (
    <>
      <MainPage plans={plans} />;
    </>
  );
}
