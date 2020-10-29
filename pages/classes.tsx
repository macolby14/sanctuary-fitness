import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function Classes() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <h1>Classes Page</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* Any from example https://material-ui-pickers.dev/getting-started/usage */}
        <DateTimePicker value={selectedDate} onChange={handleDateChange as any} />
      </MuiPickersUtilsProvider>
    </>
  );
}
