import {
  AppBar, Container, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    color: theme.palette.primary.contrastText,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="sticky">
      <Container disableGutters className={classes.container}>
        <img className={classes.img} src="static/images/inner_sanct_logo_50px.png" alt="Inner Sanctuary" />
        <Typography className={classes.title} variant="h6">Inner Sanctuary Fitness</Typography>
        <Button className={classes.navButton} component={Link} href="/">Try It Now</Button>
        <Button className={classes.navButton} href="/">Classes</Button>
        <Button className={classes.navButton}>About Me</Button>
        <Button className={classes.navButton}>Contact Us</Button>
      </Container>
    </AppBar>
  );
}
