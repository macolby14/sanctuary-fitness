import Head from 'next/head';
import {Typography, Link} from '@material-ui/core';


export default function Contact() {
  return <>
    <Head>
      <title>Contact Me - Inner Sanctuary Fitness</title>
      <meta name="description" key="description" content="The Contact Me page for Inner Sanctuary Fitness, a stretching and 
      strengthening class that features Christian prayer and meditation in the Catholic Tradition. It is part of the Pietra Fitness program." />
    </Head>
   <Typography variant="h1" align="center">Contact Me</Typography>
   <br/>
   <Typography variant="h4" align="center">Questions about scheduling a class?</Typography>
   <Typography variant="h4" align="center">Want to learn more?</Typography>
   <br/>
   <Typography variant="h4" align="center">Email me at <Link href="mailto:innersanctuaryfitness@gmail.com" target="_blank" rel="noopener noreferrer">innersanctuaryfitness@gmail.com</Link></Typography>
   <br/>
   <Typography variant="h3" align="center">Thank you!</Typography>
  </>;
}
