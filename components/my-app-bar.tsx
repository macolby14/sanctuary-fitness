import {
  AppBar, Container, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Link from './link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    alignContent: 'center',
  },
  img: {
    padding: '0 20px 0 0',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButton: {
    // color: theme.palette.primary.contrastText,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="sticky">
      <Container className={classes.container}>
        <img className={classes.img} src="static/images/inner_sanct_logo_50px.png" alt="Inner Sanctuary" />
        <Typography className={classes.title} variant="h6">Inner Sanctuary Fitness</Typography>
        <div className={classes.sectionDesktop}>
          <Button color="inherit" component={Link} href="/">Try It Now</Button>
          <Button color="inherit" component={Link} href="/">Classes</Button>
          <Button color="inherit" component={Link} href="/">About Me</Button>
          <Button color="inherit" component={Link} href="/">Contact Us</Button>
        </div>
        <div className={classes.sectionMobile}>
          <MenuIcon color="inherit" />
        </div>
      </Container>
    </AppBar>
  );
}
