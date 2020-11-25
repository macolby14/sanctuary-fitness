import {Typography, Link} from '@material-ui/core';


export default function Contact() {
  return <>
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
