import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import { UserProvider, PlanProvider } from "../contexts/Provider";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  return render ? (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserProvider>
        <PlanProvider>
          <Header />
          <Component {...pageProps} />
          <Analytics />
        </PlanProvider>
      </UserProvider>
    </ThemeProvider>
  ) : null;
}

export default App;
