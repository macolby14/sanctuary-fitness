import { AppBar, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    alignContent: 'center',
  },
  img: {
    padding: '0 20px',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="sticky">
      <Container className={classes.container}>
        <img className={classes.img} src="static/images/inner_sanct_logo_50px.png" alt="Inner Sanctuary" />
        <Typography className={classes.title} variant="h6">Inner Sanctuary Fitness</Typography>
      </Container>
    </AppBar>
  );
}
