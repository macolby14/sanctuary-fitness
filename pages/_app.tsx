// Disable eslint rule for HOC
/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container } from '@material-ui/core';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Inner Sanctuary Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Header goes here</h1>
      <main>
        <Container maxWidth="lg" disableGutters>
          <Component {...pageProps} />
        </Container>
      </main>
      <footer><h2>Footer goes here</h2></footer>
    </>
  );
}

export default MyApp;
