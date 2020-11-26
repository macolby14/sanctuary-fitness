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
        <title>Inner Sanctuary Fitness - Stretching and Strengthing in Oahu, Hawaii</title>
        <meta name="description" key="description" content="Inner Sanctuary Fitness is a stretching and 
        strengthening class that features Christian prayer and meditation in the Catholic Tradition. It is part of the Pietra Fitness program." />
      </Head>
      <main>
        <HeroBox />
        <Box display="flex" flexDirection="column" alignItems="center" m={2}>
          { /* TODO - Fix variant type conflict between MUI Link and MUI Button */ }
          <Button
            component={Link}
            className={clsx(classes.autoSideMargin, classes.marginTop)}
            href={"mailto:innersanctuaryfitness@gmail.com?Subject=I am interested in taking a Pietra Fitness class with you"+
            "&body="+
            "Hi Kimberly! I am interested in taking a class with you%0D%0A%0D%0A"+
            "My Name:%0D%0A"+
            "Times I am Available:%0D%0A"+
            "Part of Oahu I live on: %0D%0A"+
            "Do I prefer an in-person or a online lesson:%0D%0A"+
            "Anything else you should know:%0D%0A"}
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
