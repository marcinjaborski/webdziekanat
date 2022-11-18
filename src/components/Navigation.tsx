import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { NavigationStyled } from '../styles/Navigation.styled';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import DatasetIcon from '@mui/icons-material/Dataset';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <NavigationStyled>
      <MenuList sx={{ display: 'flex', flexDirection: 'column' }}>
        <a href="https://virtul.p.lodz.pl/virtul/">
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>virTul</ListItemText>
          </MenuItem>
        </a>
        <Link to="/bulletinBoard">
          <MenuItem>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>Bulletin board</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/schedule">
          <MenuItem>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText>Course schedule</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/personalData">
          <MenuItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Personal Info</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/generalData">
          <MenuItem>
            <ListItemIcon>
              <DatasetIcon />
            </ListItemIcon>
            <ListItemText>General data</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/reportCard">
          <MenuItem>
            <ListItemIcon>
              <SummarizeIcon />
            </ListItemIcon>
            <ListItemText>Report card</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/electiveCourses">
          <MenuItem>
            <ListItemIcon>
              <HowToVoteIcon />
            </ListItemIcon>
            <ListItemText>Elective courses</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/fees">
          <MenuItem>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText>Fees</ListItemText>
          </MenuItem>
        </Link>
        <a href="https://programy.p.lodz.pl/ectslabel-web/">
          <MenuItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText>ECTS Course catalogue</ListItemText>
          </MenuItem>
        </a>
        <Link to="/calendar">
          <MenuItem>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText>Terms</ListItemText>
          </MenuItem>
        </Link>
        <a href="https://samorzad.p.lodz.pl/">
          <MenuItem>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText>Student government</ListItemText>
          </MenuItem>
        </a>
      </MenuList>
    </NavigationStyled>
  );
};

export default Navigation;
