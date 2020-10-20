import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: '20vh',
    display: 'flex',
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
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.footerBox}>
          <Typography variant="subtitle1">CONTACT US</Typography>
          <Typography>kkcolby14@gmail.com</Typography>
          <Typography>(909) 835-5001</Typography>
        </div>
        <div className={classes.footerBox}>
          <Typography>Classes</Typography>
          <Typography>About Me</Typography>
          <Typography>Pietra Fitness</Typography>
        </div>
        <div className={classes.footerBox}>
          <Typography variant="subtitle1">Our Instagram</Typography>
          <InstagramIcon />
        </div>
      </Container>
    </footer>
  );
}
