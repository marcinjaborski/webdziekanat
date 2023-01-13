import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { TopBarStyled } from '../styles/TopBar.styled';
import { useContext } from 'react';
import { AuthContext } from '../App';

const TopBar = () => {
  const auth = useContext(AuthContext);
  return (
    <TopBarStyled>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Button color="inherit" size="large">
                Webdziekanat
              </Button>
            </Link>
            <a href="https://outlook.office.com/mail/">
              <Button color="inherit" size="large">
                E-mail
              </Button>
            </a>
            <a href="https://edu.p.lodz.pl/login">
              <Button color="inherit" size="large">
                Wikamp
              </Button>
            </a>
          </Box>
          {auth?.isLogged ? (
            <Link to="/">
              <Button color="inherit" onClick={() => auth?.logout()}>
                Logout
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </TopBarStyled>
  );
};

export default TopBar;
