// Disable eslint rule for HOC
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import MyAppBar from '../components/my-app-bar';
import Footer from '../components/footer';
import theme from '../styles/theme.js';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Inner Sanctuary Fitness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          key="description"
          content={'Inner Sanctuary Fitness is a stretching and strengthening class that '
        + 'features Christian prayer and meditation in the Catholic Tradition. It is part of the Pietra Fitness program and is a yoga alternative.'}
        />
        <meta name="keywords" content="Pietra Fitness, Chritian, Catholic, Yoga, Spiritual, Fitness, Stretching, Strengthening" />
        <meta name="author" content="Mark Colby, Kimberly Colby" />
        <meta property="og:local" content="en_US" />
        <meta property="og:title" content="Inner Sanctuary Fitness" />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content="https://www.innersanctuaryfitness.com" />
        <meta property="og:site_name" content="Inner Sanctuary Fitness" />
        <meta property="og:image:secure_url" content="https://innersanctuaryfitness.com/images/inner_sanct_logo_100px.png" />
        <meta property="og:image:width" content="6240" />
        <meta property="og:image:height" content="4160" />
        <meta property="og:image:alt" content="Logo of Inner Sanctuary Fintess. A woman kneeling and praying with stained glass and a dove." />
        <meta
          property="og:description"
          content={'Inner Sanctuary Fitness is a stretching and strengthening class that '
        + 'features Christian prayer and meditation in the Catholic Tradition. It is part of the Pietra Fitness program and is a yoga alternative.'}
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="@macolby14" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={
          {
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.innersanctuaryfitness.com",
              "logo": "https://innersanctuaryfitness.com/images/inner_sanct_logo_100px.png"
            }`,
          }
}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyAppBar />
        <main>
          <Container maxWidth="lg">
            <Component {...pageProps} />
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
