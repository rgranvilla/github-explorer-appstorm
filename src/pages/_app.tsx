import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/future/image";
import NextNProgress from "nextjs-progressbar";

import { store } from "../store/";

import { globalStyles } from "../styles/global";
import { Container, Header, Main } from "../styles/pages/app";

import logoImg from "../assets/logo.svg";

const persistor = persistStore(store);

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <Header>
            <Image src={logoImg} alt="" height={48} />
            <nav>
              <Link href="/">Buscar</Link>
              <Link href="/favorites">Favoritos</Link>
            </nav>
          </Header>
          <Main>
            <NextNProgress />
            <Component {...pageProps} />
          </Main>
        </Container>
      </PersistGate>
    </Provider>
  );
}
