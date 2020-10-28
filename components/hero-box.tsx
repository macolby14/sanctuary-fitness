import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
}));

export default function HeroBox() {
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
      <Image src="/static/images/inner_sanct_logo_250px.png" alt="Inner Sanctuary" height={250} width={250} />
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
