import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiUser } from '../hooks/api';
import styles from '../styles/Home.module.css';
import { Plan } from '../types/Plan';
import { User } from '../types/User';

export async function getStaticProps() {
  const plansUrl = "https://psadns.xyz/plans.php";

  const plansResponse = await fetch(plansUrl);

  const plans: Plan[] = await plansResponse.json();

  return {
    props: {
      plans
    }
  }
}

type Props = {
  user: User,
  plans: Plan[]
}

export default function Home(data: Props) {

  // get email from the input and save it in the setEmail state
  const [email, setEmail] = useState('');
  const [plans, setPlans] = useState<Plan[]>();
  const [user, setUser] = useState<User>();
  const [paymentLink, setPaymentLink] = useState('');
  const [type, setType] = useState('');

  const getPaymentLink = async (email: string, planId: number, type: string) => {
    try {

      const body = { email, planId, type };

      // debugger;
      await apiUser.post('/getUserByEmail', {
        // send the email to the backend by the body of the request
        ...body
      })
        .then(res => {
          console.log(res.data);
          setPaymentLink(res.data.paymentUrl);
        })
    } catch (error: any) {
      // debugger;
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  }

  useEffect(() => {
    setPlans(data.plans);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet='utf-8' />
        <title>Play SFA | Renovar Plano de Streaming</title>
        <meta name="description" content="Página para enovação de planos de streaming dos usuários da Play Séries, Filmes e Animes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="http://link-do-app-na-play-store.com">Play Séries, Filmes e Animes</Link>
        </h1>

        {plans && plans.map((plan) => (
          <div key={plan.id}>
            <h2>{plan.name}</h2>
            <p>{plan.description}</p>
            <p>Cartão de Crédito: {plan.price}</p>
            <p>Boleto: {plan.billet_price}</p>
            <p>PIX: {plan.pix_price}</p>
            <button onClick={() => getPaymentLink("luannbr004@gmail.com", plan.id, 'boleto')}>Pagar com boleto</button>
            <button onClick={() => getPaymentLink("luannbr004@gmail.com", plan.id, 'normal')}>Pagar com cartão de crédito</button>
            <button onClick={() => getPaymentLink("luannbr004@gmail.com", plan.id, 'pix')}>Pagar com PIX</button>
          </div>
        ))}

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
