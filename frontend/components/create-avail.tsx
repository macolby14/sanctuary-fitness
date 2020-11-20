import { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  addHours, addDays, startOfDay, startOfWeek, format,
} from 'date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

// TODO - Fix typing of date with state and MuiPicker
// TODO - If on mobile, only show selected day, not full week
// TODO - Improve accessibility to meet jsx-a11y/click-events-have-key-events

const useStyles = makeStyles((theme) => ({
  autoMargin: { margin: 'auto' },
  marginRight: { margin: theme.spacing() * 2 },
  availBox: {
    border: '1px solid black',
    width: '6rem',
    height: '2rem',
    margin: theme.spacing(1, 1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#DDD',
  },
  boxSelected: {
    borderColor: 'green',
    backgroundColor: 'green',
  },
  customRootSelected: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
    '&:hover': { backgroundColor: theme.palette.success.dark },
  },

}));

const dayOffsets = [0, 1, 2, 3, 4, 5, 6];
const timeOffsets = [6, 8, 10, 12, 14, 16, 18, 20];

type SelectedDateRecord = Record<number, boolean>;

export default function CreateAvail() {
  const classes = useStyles();
  const [date, setDate] = useState(startOfDay(new Date()));
  const [selectedMap, setSelectedMap] = useState<SelectedDateRecord>({});

  useEffect(() => {
    async function loadServer() {
      const resp = await fetch('http://localhost:8000');
      const body = await resp.json();
      console.log(body);
    }

    loadServer();
  });

  const handleDateChange = (newDate: Date) => {
    setDate(startOfDay(newDate));
  };

  const handleDateClick = (clickedDate: Date) => {
    const newSelectedMap = { ...selectedMap };
    if (newSelectedMap[clickedDate.valueOf()] === undefined) {
      newSelectedMap[clickedDate.valueOf()] = true;
    } else { delete newSelectedMap[clickedDate.valueOf()]; }
    setSelectedMap(newSelectedMap);
  };

  const weekStart = startOfWeek(date);
  const dateSpots = dayOffsets.map((dayOffset) => {
    const thisDay = addDays(weekStart, dayOffset);
    return timeOffsets.map((timeOffset) => addHours(thisDay, timeOffset));
  });
  const dateGrid = dateSpots.map((dayArr) => (
    <div key={dayArr[0].valueOf()}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant="subtitle1" align="center">{format(dayArr[0], 'EEEEEE MM/d')}</Typography>
        {dayArr.map((dateSpot) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <Button
            key={dateSpot.valueOf()}
            className={classes.availBox}
            classes={{ root: selectedMap[dateSpot.valueOf()] === true ? classes.customRootSelected : '' }}
            onClick={() => { handleDateClick(dateSpot); }}
          >
            {format(dateSpot, 'p')}
          </Button>
        ))}
      </Box>
    </div>
  ));

  return (
    <>
      <Typography variant="h3" align="center">Create New Availability</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" marginBottom={2} marginTop={2}>
          <Typography className={classes.marginRight} variant="h6" align="center">Select a date:</Typography>
          <DatePicker value={date} onChange={handleDateChange as any} />
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" flexWrap="wrap">
          {dateGrid}
        </Box>
      </MuiPickersUtilsProvider>
    </>
  );
}
