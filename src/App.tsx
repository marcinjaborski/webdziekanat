import TopBar from './components/TopBar';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import NavigationDrawer from './components/NavigationDrawer';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router';
import BulletinBoard from './components/BulletinBoard';
import CourseSchedule from './components/CourseSchedule';
import PersonalDataPage from './components/PersonalDataPage';

export const primaryColor = '#8b0304';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
  palette: {
    primary: {
      main: primaryColor,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Box className="content">
        <NavigationDrawer />
        <Box sx={{ p: 3, width: '100%' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bulletinBoard" element={<BulletinBoard />} />
            <Route path="/schedule" element={<CourseSchedule />} />
            <Route path="/personalData" element={<PersonalDataPage />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
