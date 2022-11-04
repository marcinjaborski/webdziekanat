import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import { NavigationDrawerStyled } from "../styles/NavigationDrawer.styled";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SchoolIcon from "@mui/icons-material/School";
import PaidIcon from "@mui/icons-material/Paid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import LoginIcon from "@mui/icons-material/Login";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";

const NavigationDrawer = () => {
  const [open, setOpen] = useState(true);
  return (
    <NavigationDrawerStyled>
      <Drawer variant="persistent" anchor="left" open={open}>
        <Button startIcon={<HomeIcon />}>virTul</Button>
        <Button startIcon={<WorkIcon />}>
          Statutes, regulations, ordinances
        </Button>
        <Button startIcon={<DashboardIcon />}>Bulletin board</Button>
        <Button startIcon={<ScheduleIcon />}>Course schedule</Button>
        <Button startIcon={<PersonIcon />}>Personal Info</Button>
        <Button startIcon={<SchoolIcon />}>ECTS course catalogue</Button>
        <Button startIcon={<PaidIcon />}>Tuition fee</Button>
        <Button startIcon={<CalendarMonthIcon />}>Mandatory terms</Button>
        <Button startIcon={<CalendarMonthIcon />}>Meeting terms</Button>
        <Button startIcon={<GroupsIcon />}>Student government</Button>
        <Button startIcon={<LoginIcon />}>Registration</Button>
        <Button startIcon={<PasswordIcon />}>Password recalling</Button>
      </Drawer>
    </NavigationDrawerStyled>
  );
};

export default NavigationDrawer;
