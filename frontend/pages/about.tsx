import Head from 'next/head';
import {Typography} from '@material-ui/core';
import Image from 'next/image';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
  container: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]:{
      flexDirection: 'row'
    }
  },
  splitContainer: {
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '50%',
      padding: theme.spacing(4)
    },
  },
  pictureText: {
    paddingBottom: theme.spacing(2)
  }
}))

export default function About() {
  const classes=useStyles();
  return <>
  <Head>
    <title>About Me - Inner Sanctuary Fitness</title>
    <meta name="description" key="description" content="The About Me page for Kimberly Colby, who leads Inner Sanctuary Fitness. 
    Inner Sanctuary Fitness is a stretching and strengthening class that features Christian prayer and meditation in the Catholic 
    Tradition. It is part of the Pietra Fitness program." />
  </Head>
  <Typography variant="h1" align="center">About Me</Typography>
  <div  className={classes.container}>
    <div className={classes.splitContainer}>
      <Typography className={classes.pictureText} variant="h6">
        Inner Sanctuary Fitness seeks to share the beauty of the Gospel through strengthening of the <em>body</em>, engagement of the <em>mind</em>, and caring of the <em>soul</em>.
      </Typography>
      <Image src='/static/images/aboutme_3000_2000_tiny.jpg' alt='About Me photo' width={3000} height={2000} />
    </div>
    <div className={classes.splitContainer}>
      <Typography variant="body2">
      Hello! I’m Kimberly, a wife and convert to the Catholic faith.  A life-long athlete, I founded Inner Sanctuary 
      Fitness in 2020 after becoming certified as a Pietra Fitness Foundations 3 Instructor.  My desire is to share 
      the truth, goodness, and beauty of Christianity.  I want clients, like you, to recognize your inherent beauty 
      and dignity as one made in God's image and likeness. <br/>
      <br/>
      You understand that you're more than just a "lump of self-aware molecules."  You understand that what we do with 
      our bodies matter - physical exercise impacts our physical, mental, and emotional health.  And, in a culture 
      that "preaches" materialism, you know that our souls cannot be neglected. <br/>
      <br/> 
      I invite you to experience a fitness program that allows you to encounter and glorify God in the ordinary 
      circumstances of everyday life...to grow in virtue through discipline of the body and mind... to nourish your 
      inner sanctuary with bodily prayer and Christian meditation.  No matter your current circumstances, your faith 
      journey (or lack thereof) - you are invited.  My hope and prayer is to walk alongside you in the greatest 
      pursuit - eternal life with God in heaven. <br/>
      <br/>
      AMDG  + + + <br/>
      <br/>
      For the Greater Glory of God<br/>
      </Typography>
    </div>
  </div>
  </>;
}
