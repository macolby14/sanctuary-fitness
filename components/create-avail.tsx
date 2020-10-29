import { useState } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { add } from 'date-fns';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

// TODO - Fix typing of date with state and MuiPicker

const useStyles = makeStyles((theme) => ({
  marginRight: {
    marginRight: theme.spacing() * 2,
  },
  marginLeft: {
    marginLeft: theme.spacing() * 2,
  },
  autoLeftRightMargin: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

type DateLabelProps = {
  date: Date,
  setDate: (date: any)=>void, // eslint-disable-line no-unused-vars
  children: React.ReactNode,
  disablePast: boolean
}

function DateLabel({
  date, setDate, children, disablePast,
}: DateLabelProps) {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-end" m={2}>
      <Typography variant="h5" className={classes.marginRight}>{children}</Typography>
      {/* Type error. Any to match example https://material-ui-pickers.dev/getting-started/usage */}
      <DateTimePicker value={date} onChange={setDate} disablePast={disablePast} />
      <Typography variant="subtitle1" className={classes.marginLeft}>(Times are in HST)</Typography>
    </Box>
  );
}

export default function CreateAvail() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
    setEndDate(add(date, { hours: 1, minutes: 15 }));
  };

  const handleAvailCreation = () => {
    // TODO: Send data to the server and provide feedback
  };

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h3" align="center">Create New Availability</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateLabel date={startDate} setDate={handleStartDateChange} disablePast>
          Start Date
        </DateLabel>
        <DateLabel date={endDate} setDate={setEndDate} disablePast>
          End Date
        </DateLabel>
      </MuiPickersUtilsProvider>
      <Button variant="contained" color="primary" className={classes.autoLeftRightMargin} onClick={handleAvailCreation}>Create Availability</Button>
    </Box>
  );
}
