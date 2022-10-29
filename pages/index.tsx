import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiUser } from '../hooks/api';
import { Plan } from '../types/Plan';
import { User } from '../types/User';
import { Input } from './component/Input';
import { SignUpMessage } from './component/SignUpMessage';

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
  const [type, setType] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);

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

  useEffect(() => {
    setPlans(data.plans);
    setTimeout(function () {
      setVisible(false);
    }, 33000);
  }, [data.plans]);

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

      <main className='flex flex-col justify-center items-center h-full pb-4'>
        <h1 className='font-bold text-5xl mt-5 mb-5 '>
          <Link href='http://link-do-app-na-play-store.com'>
            Play Séries, Filmes e Animes
          </Link>
        </h1>
        <section
          id='section'
          className='flex flex-col justify-items-center items-center border border-slate-700 w-11/12 min-h-full'
        >
          <Input autoFocus />
          {error && visible ? <SignUpMessage /> : null}

          <div
            id='map-wrapper'
            style={{ justifyContent: 'space-evenly' }}
            className='flex flex-row pb-3'
          >
            {plans &&
              plans.map((plan) => (
                // w-90
                <div
                  className='map-wrapper_div-card border border-double rounded border-zinc-800 w-2/3 h-auto mx-3 p-2'
                  key={plan.id}
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <h2 className='div-card_title text-center font-semibold text-2xl underline mb-2'>
                    {plan.name}
                  </h2>
                  <p className='text-justify w-auto px-2'>
                    <strong>{plan.description}</strong>
                  </p>
                  <div className='flex flex-col justify-start w-full h-fit pr-3 my-2 ml-1'>
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
                        getPaymentLink(
                          'ds4ds545sd45sd@gmail.com',
                          plan.id,
                          'boleto'
                        )
                      }
                    >
                      PAGAR COM <em>Boleto</em>
                    </button>
                    <button
                      onClick={() =>
                        getPaymentLink(
                          'luannbr004@gmail.com',
                          plan.id,
                          'normal'
                        )
                      }
                    >
                      PAGAR COM <em>Cartão de Crédito</em>
                    </button>
                    <button
                      onClick={() =>
                        getPaymentLink('luannbr004@gmail.com', plan.id, 'pix')
                      }
                    >
                      PAGAR COM <em>PIX</em>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
        {/* <div>
          <h2>Renovar Plano</h2>
          <p>Insira o seu e-mail para renovar o seu plano</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={() => getUserByEmail(email)}>Renovar</button>
        </div> */}

        {/* <button onClick={ }>link</button> */}

        {/* <input type="email" name="email" id="email" /> */}

        {/* planos: {plans.map(plan => (
          <div key={plan.id}>
            <h1>{plan.name}</h1>
            <h2>{plan.description}</h2>
            <h3>{plan.price}</h3>
          </div>
        ))}

        {user && (
          <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.id}</h3>
          </div>
        )} */}
      </main>

      {/* <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
}
