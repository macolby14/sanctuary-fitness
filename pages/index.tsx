import Head from 'next/head';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HeroBox from '../components/hero-box';
import Link from '../components/link';
import MoreInfo from '../components/more-info';

const useStyles = makeStyles((theme) => ({
  buttonMargin: {
    margin: theme.spacing(2, 'auto'),
  },
  margin: {
    margin: theme.spacing(1, 2),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Inner Sanctuary Fitness - Home</title>
      </Head>
      <main>
        <HeroBox />
        <Box display="flex" flexDirection="column" alignItems="center" m={2}>
          { /* TODO - Fix variant type conflict between MUI Link and MUI Button */ }
          <Button component={Link} className={classes.buttonMargin} href="/" color="primary" variant={'contained' as any}>Get Started</Button>
          <Typography variant="h6">Classes for all levels in Oahu, Hawaii</Typography>
          <MoreInfo />
        </Box>

      </main>
    </div>
  );
}
