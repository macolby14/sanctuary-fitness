import { Typography } from '@material-ui/core';
import CreateAVail from '../components/create-avail';

// import CreateAvail from '../components/create-avail';

const dummyAvail = [
  { startTime: 1604095200000, endTime: 1604099700000 },
  { startTime: 1604095200000, endTime: 1604099700000 }];

export default function Classes() {
  return (
    <>
      <Typography variant="h3" align="center"> Upcoming Courses</Typography>
      <CreateAVail />
    </>
  );
}
