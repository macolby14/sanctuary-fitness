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
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  footerBox: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing() * 2,
    },
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
          <Typography variant="subtitle1"><Link href="/contact" color="inherit">Contact Me</Link></Typography>
          <Typography>
            <Link
              href="mailto:innersanctuaryfitness@gmail.com?subject=Question for Inner Sanctuary Fitness"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              innersanctuaryfitness@gmail.com
            </Link>

          </Typography>
          <Typography>(909) 835-5001</Typography>
        </div>
        <div className={classes.footerBox}>
          <Typography>
            <Link
              href="mailto:innersanctuaryfitness@gmail.com?subject=I'd like to attend a class with Inner Sanctuary Fitness"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              Attend a Class
            </Link>
          </Typography>
          <Typography><Link href="/about" color="inherit">About Me</Link></Typography>
          <Typography>
            <Link href="https://pietrafitness.com/" color="inherit">Pietra Fitness</Link>
          </Typography>
        </div>
        <div className={classes.footerBox}>
          <Typography variant="subtitle1">Follow Me</Typography>
          <IconButton className={classes.iconButton} component={Link} href="https://www.instagram.com/innersanctuaryfitness/"><InstagramIcon /></IconButton>
        </div>
      </Container>
    </footer>
  );
}
