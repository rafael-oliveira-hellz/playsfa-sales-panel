import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiUser } from '../hooks/api';
import { Plan } from '../types/Plan';
import { User } from '../types/User';
import PageFooter from './components/Footer';
import Input from './components/Input';
import PurchaseCard from './components/PurchaseCard';
import SignUpMessage from './components/SignUpMessage';

export async function getStaticProps() {
  const plansUrl = 'https://psadns.xyz/plans.php';

  const plansResponse = await fetch(plansUrl);

  const plans: Plan[] = await plansResponse.json();

  return {
    props: {
      plans
    }
  };
}

type Props = {
  user: User;
  plans: Plan[];
};

export default function Home(data: Props) {
  // get email from the input and save it in the setEmail state
  const [email, setEmail] = useState('');
  const [plans, setPlans] = useState<Plan[]>();
  const [user, setUser] = useState<User>();
  const [paymentLink, setPaymentLink] = useState('');
  const [error, setError] = useState(false);
  const [planChosen, setPlanChosen] = useState('');
  const [planPrice, setPlanPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [closeModal, setCloseModal] = useState(false);

  const getPaymentLink = async (
    email: string,
    planId: number,
    type: string
  ) => {
    try {
      const body = { email, planId, type };

      // debugger;
      await apiUser
        .post('/getUserByEmail', {
          // send the email to the backend by the body of the request
          ...body
        })
        .then((res: any) => {
          console.log(res.data);
          setUser(res.data.data);
          setPaymentLink(res.data.paymentUrl);
        });
    } catch (error: any) {
      // debugger;
      if (error.response) {
        console.log(error.response.data);
        setError(true);
      }
    }
  };

  const handlePlanChosen = (
    plan_name: string,
    plan_id: number,
    user_email: string,
    payment_type: string,
    plan_price: string
  ) => {
    setPlanChosen(plan_name);
    setPlanPrice(plan_price);
    setPaymentMethod(payment_type);
    getPaymentLink(user_email, plan_id, payment_type);
    setEmail('');
    setCloseModal(false);
  };

  const handleClick = () => {
    setCloseModal(true);
    setUser(undefined);
    setPaymentLink('');
    setPlanChosen('');
    setPlanPrice('');
    setPaymentMethod('');
    setError(false);
  };

  // iterate throught the string and break a line every exclamation mark without excluding the exclamation mark
  const breakLine = (str: string) => {
    const arr = str.split('!');
    return arr.map((item, index) => {
      return (
        <span key={index}>
          {item}
          {index !== arr.length - 1 && ' !'}
          {index !== arr.length - 1 && <br />}
        </span>
      );
    });
  };

  useEffect(() => {
    setPlans(data.plans);
  }, [data.plans, error, user]);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Play SFA | Renovar Plano de Streaming</title>
        <meta
          name='description'
          content='Página para renovação de planos de streaming dos usuários da Play Séries, Filmes e Animes'
        />
        <link rel='icon' href='/p-icon.svg' />
      </Head>

      <main className='flex flex-col justify-center items-center h-full mb-11'>
        <h1 className='font-bold text-5xl mt-5 mb-5'>
          Play Séries, Filmes e Animes
        </h1>
        <section
          id='section'
          className='flex flex-col justify-items-center items-center border rounded-2xl border-slate-700 w-11/12 min-h-full'
        >
          <Input
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={() => {
              setError(false);
            }}
          />
          {error ? <SignUpMessage /> : null}

          <div
            id='map-wrapper'
            style={{ justifyContent: 'space-evenly' }}
            className='flex flex-row pb-3'
          >
            {plans &&
              plans.map((plan) => (
                // w-90
                <div
                  className='map-wrapper_div-card border  border-double rounded border-zinc-800 w-2/3 h-auto mx-3 p-2'
                  key={plan.id}
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <h2 className='div-card_title text-center font-semibold text-2xl underline mb-2'>
                    {plan.name}
                  </h2>
                  <p className='text-left px-2 py-5'>
                    <strong>{breakLine(plan.description)}</strong>
                  </p>
                  <div className='flex flex-col justify-start w-full h-fit pr-3 pb-4 my-2 ml-1'>
                    <p className='text-left font-bold '>
                      Boleto: R${plan.billet_price},00
                    </p>
                    <p className='text-left font-bold '>
                      Cartão de Crédito: R${plan.price},00
                    </p>
                    <p className='text-left font-bold '>
                      PIX: R${plan.pix_price},00
                    </p>
                  </div>

                  <div className='flex flex-col w-full h-auto'>
                    <button
                      onClick={() =>
                        handlePlanChosen(
                          plan.name,
                          plan.id,
                          email,
                          'boleto',
                          plan.billet_price
                        )
                      }
                    >
                      PAGAR COM <em>Boleto</em>
                    </button>
                    <button
                      onClick={() =>
                        handlePlanChosen(
                          plan.name,
                          plan.id,
                          email,
                          'normal',
                          plan.price
                        )
                      }
                    >
                      PAGAR COM <em>Cartão de Crédito</em>
                    </button>
                    <button
                      onClick={() =>
                        handlePlanChosen(
                          plan.name,
                          plan.id,
                          email,
                          'pix',
                          plan.pix_price
                        )
                      }
                    >
                      PAGAR COM <em>PIX</em>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {!error && user && (
          <PurchaseCard
            customClass={closeModal ? 'modal-closed' : ''}
            onClick={handleClick}
            userName={user.name}
            userEmail={user.email}
            userPremium={user.premuim}
            planName={planChosen}
            planPrice={planPrice}
            paymentMethod={paymentMethod}
            paymentUrl={paymentLink}
          />
        )}
      </main>
      <PageFooter />
    </>
  );
}
