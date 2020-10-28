import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  heroImage: {
    maxWidth: '100%',
    height: 'auto',
    margin: '20px',
  },
}));

export default function HeroBox() {
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
      <img className={classes.heroImage} src="static/images/inner_sanct_logo_250px.png" alt="Inner Sanctuary" />
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h2">Inner Sancutary Fitness</Typography>
        <Typography variant="h6">
          Stretch and Strengthen Your Body
        </Typography>
        <Typography variant="h6">
          Calm and Engage Your Mind
        </Typography>
        <Typography variant="h6">
          Care and nourish Your Soul
        </Typography>
      </Box>
    </Box>
  );
}
