import { Container, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';

import Link from './link';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: '20vh',
    display: 'flex',
    marginTop: theme.spacing(5),
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  footerBox: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.footerBox}>
          <Typography variant="subtitle1"><Link href="/contact" color="inherit">CONTACT US</Link></Typography>
          <Typography>kkcolby14@gmail.com</Typography>
          <Typography>(909) 835-5001</Typography>
        </div>
        <div className={classes.footerBox}>
          <Typography><Link href="/classes" color="inherit">Classes</Link></Typography>
          <Typography><Link href="/about" color="inherit">About Us</Link></Typography>
          <Typography>
            <Link href="https://pietrafitness.com/" color="inherit">Pietra Fitness</Link>
          </Typography>
        </div>
        <div className={classes.footerBox}>
          <Typography variant="subtitle1">Follow Us</Typography>
          <IconButton className={classes.iconButton} component={Link} href="https://www.instagram.com/innersanctuaryfitness/"><InstagramIcon /></IconButton>
        </div>
      </Container>
    </footer>
  );
}
