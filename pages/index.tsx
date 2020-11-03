import Head from 'next/head';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import HeroBox from '../components/hero-box';
import Link from '../components/link';
import MoreInfo from '../components/more-info';
import ImageCarousel from '../components/image-carousel';

const useStyles = makeStyles((theme) => ({
  autoSideMargin: {
    margin: theme.spacing('auto', 'auto'),
  },
  marginTop: {
    marginTop: theme.spacing() * 2,
  },
  marginTopDouble: {
    marginTop: theme.spacing() * 4,
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
          <Button
            component={Link}
            className={clsx(classes.autoSideMargin, classes.marginTop)}
            href="mailto:innersanctuaryfitness@gmail.com?subject=I'd like to attend a class with Inner Sanctuary Fitness"
            rel="noopener noreferrer"
            target="_blank"
            color="primary"
            variant={'contained' as any}
          >
            Get Started

          </Button>
          <Typography variant="h6">Classes for all levels in Oahu, Hawaii</Typography>
          <ImageCarousel classes={classes.marginTopDouble} />
          <MoreInfo />
        </Box>

      </main>
    </div>
  );
}
