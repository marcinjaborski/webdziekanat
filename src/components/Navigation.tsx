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
import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

type NavigationButtonProps = {
  link: string;
  icon: ReactNode;
  label: string;
};

const NavigationButton = (props: NavigationButtonProps) => {
  const location = useLocation();
  const Content = (props: NavigationButtonProps) => (
    <MenuItem className={location.pathname === props.link ? 'active' : ''}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>{props.label}</ListItemText>
    </MenuItem>
  );
  return (
    <>
      {props.link.includes('http') ? (
        <a href={props.link}>
          <Content {...props} />
        </a>
      ) : (
        <Link to={props.link}>
          <Content {...props} />
        </Link>
      )}
    </>
  );
};

const Navigation = () => {
  return (
    <NavigationStyled>
      <MenuList sx={{ display: 'flex', flexDirection: 'column' }}>
        <NavigationButton link="https://virtul.p.lodz.pl/virtul/" icon={<HomeIcon />} label="virTul" />
        <NavigationButton link="/bulletinBoard" icon={<DashboardIcon />} label="Bulletin board" />
        <NavigationButton link="/schedule" icon={<ScheduleIcon />} label="Course schedule" />
        <NavigationButton link="/personalData" icon={<PersonIcon />} label="Personal Info" />
        <NavigationButton link="/generalData" icon={<DatasetIcon />} label="General data" />
        <NavigationButton link="/reportCard" icon={<SummarizeIcon />} label="Report card" />
        <NavigationButton link="/electiveCourses" icon={<HowToVoteIcon />} label="Elective courses" />
        <NavigationButton
          link="https://programy.p.lodz.pl/ectslabel-web/"
          icon={<SchoolIcon />}
          label="ECTS Course catalogue"
        />
        <NavigationButton link="/terms" icon={<CalendarMonthIcon />} label="Terms" />
        <NavigationButton link="https://samorzad.p.lodz.pl/" icon={<GroupsIcon />} label="Student government" />
      </MenuList>
    </NavigationStyled>
  );
};

export default Navigation;
