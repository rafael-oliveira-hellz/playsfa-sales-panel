import Head from 'next/head';
import { LinearProgress } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [plans, setPlans] = useState<Plan[]>();
  const [user, setUser] = useState<User>();
  const [paymentLink, setPaymentLink] = useState('');
  const [error, setError] = useState(false);
  const [planChosen, setPlanChosen] = useState('');
  const [planPrice, setPlanPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [closeModal, setCloseModal] = useState(false);
  const [loading, setLoading] = useState(false)

  const getPaymentLink = async (
    email: string,
    planId: number,
    type: string
  ) => {
    try {
        setLoading(true);
        const body = { email, planId, type };
      await apiUser
        .post('/getUserByEmail', {
          ...body
        })
        .then((res: any) => {
          setUser(res.data.data);
          setPaymentLink(res.data.paymentUrl);
        });
    } catch (error: any) {  
      if (error.response) {
        setError(true);
      }
    }
    setLoading(false);

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

  useLayoutEffect(() => {
    setPlans(data.plans);
  }, [data.plans, error, user]);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Play SFA | Renovar Plano de Streaming</title>
        <meta
          name='description'
          content='P??gina para renova????o de planos de streaming dos usu??rios da Play S??ries, Filmes e Animes'
        />
        <link rel='icon' href='/p-icon.svg' />
      </Head>

      <main className='flex flex-col justify-center items-center h-full mb-11'>
        <h1 className='font-bold text-5xl mt-5 mb-5'>
          Play S??ries, Filmes e Animes
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
            {loading ? <LinearProgress color="secondary" id="progress-bar" style={{marginTop:"-0.5rem", marginBottom:"1rem", width:"55%"}}/> : null}
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
                      Cart??o de Cr??dito: R${plan.price},00
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
                      PAGAR COM <em>Cart??o de Cr??dito</em>
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

        <article>Est?? com algum problema com pagamento, premium ou outro assunto? Entre em contato com o suporte pelo <a href="https://discord.gg/app" target="_blank" rel="noreferrer">Discord</a></article>
      </main>
      <PageFooter />
    </>
  );
}
