import {
  Divider,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

type SemesterInfo = {
  name: string;
  average: number | null;
  ects: number | null;
  subjects: Subject[];
};

type Subject = {
  code: string;
  name: string;
  instructor: string;
  ects: number;
  grade: number | null;
};

const ReportCard = () => {
  const [semesters, setSemesters] = useState<SemesterInfo[]>();
  const [selectedSemester, setSelectedSemester] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:5000/grades');
      setSemesters(response.data);
    })();
  }, []);
  return (
    <Paper sx={{ p: 5, m: 'auto' }}>
      <Typography variant="h4">Report card</Typography>
      <Divider sx={{ mb: 3 }} />
      <TextField
        select
        label="Semester"
        value={selectedSemester}
        onChange={(event) => setSelectedSemester(Number(event.target.value))}
      >
        {semesters?.map((semester, index) => (
          <MenuItem key={semester.name} value={index}>
            {semester.name}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="body1">Average grade: {semesters?.[selectedSemester].average ?? 'None'}</Typography>
      <Typography variant="body1">ECTS points: {semesters?.[selectedSemester].ects ?? 'None'}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>ECTS</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {semesters?.[selectedSemester].subjects.map((subject) => (
              <TableRow key={subject.code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {subject.code}
                </TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.instructor}</TableCell>
                <TableCell>{subject.ects}</TableCell>
                <TableCell>{subject.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ReportCard;
