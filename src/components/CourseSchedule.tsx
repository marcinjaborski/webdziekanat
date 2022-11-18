// @ts-ignore
import schedule from '../img/schedule.png';
import { Box } from '@mui/material';

const CourseSchedule = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <img src={schedule} alt="schedule" style={{ width: '100%' }} />
    </Box>
  );
};

export default CourseSchedule;
