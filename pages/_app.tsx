import { Analytics } from "@vercel/analytics/react";
import {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import "../styles/globals.css";
import { UserProvider, PlanProvider } from "../contexts/Provider";

function App({Component, pageProps}: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  return render ? (
    <>
    <UserProvider>
      <PlanProvider>
        <Component {...pageProps} />
        <Analytics />
      </PlanProvider>
    </UserProvider>
    </>
  ) : null;
}

export default App;