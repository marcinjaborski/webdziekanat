import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Divider, Paper, Typography } from '@mui/material';
import DataTextField from './DataTextField';

type GeneralData = {
  faculty: string;
  course: string;
  specialty: string;
  studyMode: string;
  length: number;
  index: number;
  currentYear: number;
  currentSemester: number;
  academicYear: string;
  semesterQualification: string;
  average: {
    semester: number;
    whole: number;
    ects: string;
  };
};

const GeneralDataPage = () => {
  const [data, setData] = useState<GeneralData>({
    faculty: '',
    course: '',
    specialty: '',
    studyMode: '',
    length: 0,
    index: 0,
    currentYear: 0,
    currentSemester: 0,
    academicYear: '',
    semesterQualification: '',
    average: {
      semester: 0,
      whole: 0,
      ects: '',
    },
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:5000/general');
      setData(response.data);
    })();
  }, []);

  return (
    <Paper sx={{ p: 5, width: 420, m: 'auto' }}>
      <Typography variant="h4">General</Typography>
      <Divider />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Faculty" value={data.faculty} />
          <DataTextField label="Course" value={data.course} />
          <DataTextField label="Speciality" value={data.specialty} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Mode of studies" value={data.studyMode} />
          <DataTextField label="Length of studies" value={data.length.toString()} />
          <DataTextField label="index" value={data.index.toString()} />
        </Box>
      </Box>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Current
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Current year" value={data.currentYear.toString()} />
          <DataTextField label="Current semester" value={data.currentSemester.toString()} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Academic year" value={data.academicYear} />
          <DataTextField label="Semester qualification" value={data.semesterQualification} />
        </Box>
      </Box>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Average
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Semester" value={data.average.semester.toString()} />
          <DataTextField label="Whole" value={data.average.whole.toString()} />
          <DataTextField label="ECTS" value={data.average.ects} />
        </Box>
      </Box>
    </Paper>
  );
};

export default GeneralDataPage;
