import TopBar from './components/TopBar';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router';
import BulletinBoard from './components/BulletinBoard';
import CourseSchedule from './components/CourseSchedule';
import PersonalDataPage from './components/PersonalDataPage';
import GeneralDataPage from './components/General';
import ReportCard from './components/ReportCard';
import ElectiveCourses from './components/ElectiveCourses';
import Terms from './components/Terms';
import Login from './components/Login';
import { createContext, useState } from 'react';

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

export const AuthContext = createContext<{ isLogged: boolean; login: Function; logout: Function } | null>(null);

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ isLogged, login, logout }}>
        <TopBar />
        <Box className="content">
          <Navigation />
          <Box sx={{ p: 3, width: '100%' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bulletinBoard" element={<BulletinBoard />} />
              {isLogged ? <Route path="/schedule" element={<CourseSchedule />} /> : null}
              {isLogged ? <Route path="/personalData" element={<PersonalDataPage />} /> : null}
              {isLogged ? <Route path="/generalData" element={<GeneralDataPage />} /> : null}
              {isLogged ? <Route path="/reportCard" element={<ReportCard />} /> : null}
              {isLogged ? <Route path="/electiveCourses" element={<ElectiveCourses />} /> : null}
              {isLogged ? <Route path="/terms" element={<Terms />} /> : null}
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
        </Box>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
