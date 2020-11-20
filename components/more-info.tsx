import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1, 2),
  },
  flexGrow: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
}));

type InfoRowProps = {
    src: string,
    alt: string,
    subject: string,
    children: React.ReactNode
}

function InfoRow({
  src, alt, subject, children,
}: InfoRowProps) {
  const classes = useStyles();
  return (
    <Box className={classes.fullWidth} display="flex" m={2}>
      {/* TODO - Use next/image. Sizing more difficult with svg but could have loading benefits  */}
      <img src={src} alt={alt} width="75px" height="75px" />
      <Typography className={classes.margin} variant="h6">{subject}</Typography>
      <Typography className={clsx(classes.margin, classes.flexGrow)} variant="body1">{children}</Typography>
    </Box>
  );
}

export default function MoreInfo() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={2}>
      <InfoRow src="/static/images/body_icon.svg" alt="Body Icon" subject="Body">
        Physical exercises are designed to increase your flexibility and range of motion,
        and develop your muscle and core strength. There are different levels appropriate for
        everyone, from beginners to experts.
      </InfoRow>
      <InfoRow src="/static/images/mind_icon.svg" alt="Mind Icon" subject="Mind">
        Workouts are designed to calm your mind while simulatenously helping
        you focus on God&apos;s infinite love.
      </InfoRow>
      <InfoRow src="/static/images/soul_icon.svg" alt="Soul Icon" subject="Soul">
        Bodily prayer is coupled with Christian prayer and mediation to nourish your
        soul, focusing on themes of joy, peace, surrender, and
        embracing the present moment.
      </InfoRow>
    </Box>
  );
}
