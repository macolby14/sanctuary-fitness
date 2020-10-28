import Head from 'next/head';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HeroBox from '../components/hero-box';
import Link from '../components/link';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2, 'auto'),
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
          <Button component={Link} className={classes.margin} href="/" color="primary" variant={'contained' as any}>Get Started</Button>
          <Typography variant="h6">Classes for all levels in Oahu, Hawaii</Typography>
          <MoreInfo />
        </Box>

      </main>
    </div>
  );
}

function MoreInfo() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={2}>
      <InfoRow />
      <InfoRow />
      <InfoRow />
    </Box>
  );
}

function InfoRow() {
  return (
    <Box display="flex" m={2}>
      <h6>Image</h6>
      <h6>Body</h6>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos culpa ab qui maxime magnam. Perspiciatis distinctio optio nemo repellendus esse dolore dignissimos similique debitis, nisi error reiciendis excepturi aspernatur?</Typography>
    </Box>
  );
}
