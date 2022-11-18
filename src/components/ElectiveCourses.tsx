import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Checkbox,
  Button,
  Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CheckIcon from '@mui/icons-material/Check';

type Elective = {
  code: string;
  name: string;
  instructor: string;
  available: string;
  enrolled: string;
  ects: string;
  semester: string;
  selected: false;
};

const ElectiveCourses = () => {
  const [elective, setElective] = useState<Elective[]>();

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:5000/elective');
      setElective(response.data);
    })();
  }, []);
  return (
    <Paper sx={{ p: 5, m: 'auto' }}>
      <Typography variant="h4">Elective courses</Typography>
      <Divider sx={{ mb: 3 }} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>Min/Max number of students</TableCell>
              <TableCell>Enrolled</TableCell>
              <TableCell>ECTS</TableCell>
              <TableCell>Semester</TableCell>
              <TableCell>Selected</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {elective?.map((subject) => (
              <TableRow key={subject.code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {subject.code}
                </TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.instructor}</TableCell>
                <TableCell align="right">{subject.available}</TableCell>
                <TableCell align="right">{subject.enrolled}</TableCell>
                <TableCell align="right">{subject.ects}</TableCell>
                <TableCell align="right">{subject.semester}</TableCell>
                <TableCell>
                  <Checkbox checked={subject.selected} disabled />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'right', mt: 1 }}>
        <Button endIcon={<CheckIcon />}>Confirm</Button>
      </Box>
    </Paper>
  );
};
export default ElectiveCourses;
