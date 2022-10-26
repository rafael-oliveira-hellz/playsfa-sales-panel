import 'dotenv/config';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Plan } from '../types/Plan';
import { User } from '../types/User';

import axios from 'axios';
import mariadb from 'mariadb';
import qs from 'qs';

const pool = mariadb.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5
});

type Props = {
  user: User,
  plans: Plan[]
}

export default function Home(data: Props) {

  // get email from the input and save it in the setEmail state
  const [email, setEmail] = useState('');
  const [plans, setPlans] = useState<Plan[]>([]);
  const [user, setUser] = useState<User>();
  const [paymentLink, setPaymentLink] = useState('');



  // async function getUserByEmail(email) {
  const getUserByEmail = async (email: string) => {

    const conn = await pool.getConnection();

    const rows = await conn.query('SELECT * FROM users WHERE email = ?', [email]);

    await conn.end();

    console.table(rows[0]);

    return setUser(rows[0]);
  }

  // URL to post the user id, plan id and payment method to the MercadoPago API
  // POST https://psadns.xyz/payment-url.php
  // the body of the request should be like this:
  // {
  //   "userId": 1,
  //   "planId": 1,
  //   "type": "boleto" | "normal" | "pix"
  // }

  // "normal" is the credit card payment method
  // and the header type should application/x-www-form-urlencoded

  /**
   * 
   * the cURL command to get the payment URL is:
   * 
   * curl --location --request POST 'https://psadns.xyz/payment-url.php' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'userId=123' \
    --data-urlencode 'planId=1' \
    --data-urlencode 'type=boleto'
    
    
    Se tudo estiver OK, será retornado um JSON no seguinte formato:
    
    {
      "url": "{url que o user deve abrir para pagar}",
      "sandbox_url": "{url que devemos usar para testar na sandbox}"
    }
   */

  const getPaymentLink = (userId: number, planId: number, type: string) => {
    const data = qs.stringify({
      'userId': userId,
      'planId': planId,
      'type': type
    });
    var config = {
      method: 'post',
      url: `https://psadns.xyz/payment-url.php`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    return axios(config)
      .then(function (response) {
        // return JSON.stringify(response.data);
        const { data } = response;

        console.table(data);

        return data;
      })
      .then((data) => {
        setPaymentLink(data);
      })
      .catch(function (err) {
        return {
          error: true,
          message: {
            code: err.response?.status || err,
            text: err.response?.statusText || ''
          }
        }
      });
  }
  useEffect(() => {
    // URL to get the plans from the API
    // GET https://psadns.xyz/plans.php

    async () => {
      await axios.get('https://psadns.xyz/plans.php')
        .then((res) => {
          const { data } = res;

          console.table(data);

          return data;
        })
        .then((data) => setPlans(data));
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Play SFA | Renovar Plano de Streaming</title>
        <meta name="description" content="Página para enovação de planos de streaming dos usuários da Play Séries, Filmes e Animes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="http://link-do-app-na-play-store.com">Play Séries, Filmes e Animes</Link>
        </h1>


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