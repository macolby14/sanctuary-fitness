// Disable eslint rule for HOC
/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container, CssBaseline } from '@material-ui/core';

import MyAppBar from '../components/my-app-bar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Inner Sanctuary Fitness</title>
      </Head>
      <MyAppBar />
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
