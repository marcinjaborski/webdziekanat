import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { TopBarStyled } from '../styles/TopBar.styled';

const TopBar = () => {
  return (
    <TopBarStyled>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Webdziekanat</Link>
          </Typography>
          <ButtonGroup variant="text" color="inherit">
            <Button>PL</Button>
            <Button>EN</Button>
          </ButtonGroup>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </TopBarStyled>
  );
};

export default TopBar;
