// Disable eslint rule for HOC
/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from 'next/app';
import Head from 'next/head';

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
        <Component {...pageProps} />
      </main>
      <footer><h2>Footer goes here</h2></footer>
    </>
  );
}

export default MyApp;
