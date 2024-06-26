import { Box, Paper, Typography } from '@mui/material';
import { HomePageStyled } from '../styles/HomePage.styled';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext, primaryColor } from '../App';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const HomePage = () => {
  const auth = useContext(AuthContext);
  return (
    <HomePageStyled>
      <Typography variant="subtitle1" sx={{ color: primaryColor, fontWeight: 'bold', m: 2 }}>
        The System of Electronic Mail (SPE) implemented in our University must be obligatorily used by all students, PhD
        students and staff members of the Technical University of Lodz
      </Typography>
      <Box className="tileContainer">
        <Link to="/bulletinBoard">
          <Paper sx={{ bgcolor: '#46909b' }}>
            <DashboardIcon />
            Bulletin Board
          </Paper>
        </Link>
        {auth?.isLogged ? (
          <Link to="/schedule">
            <Paper sx={{ bgcolor: '#336d71' }}>
              <ScheduleIcon />
              Course Schedule
            </Paper>
          </Link>
        ) : null}
        <a href="https://programy.p.lodz.pl/ectslabel-web/" target="_blank" rel="noreferrer">
          <Paper sx={{ bgcolor: '#7d882e' }}>
            <SchoolIcon />
            ECTS Course catalogue
          </Paper>
        </a>
        {auth?.isLogged ? (
          <Link to="/personalData">
            <Paper sx={{ bgcolor: '#750105' }}>
              <PersonIcon />
              Personal data
            </Paper>
          </Link>
        ) : null}
      </Box>
      <Typography variant="subtitle2" sx={{ color: 'green', fontWeight: 'bold', m: 1 }}>
        Attention!
        <br />
        Foreign students can obtain the PESEL number from the appropriate deanery.
      </Typography>
      <Typography variant="subtitle2" sx={{ color: primaryColor, fontWeight: 'bold', m: 1 }}>
        The site is unavailable every night between 23.00 and 02.00 due to maintenance tasks
      </Typography>
    </HomePageStyled>
  );
};

export default HomePage;
