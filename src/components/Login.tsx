import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';

const Login = () => {
  const auth = useContext(AuthContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Paper sx={{ p: 5, width: 420, m: 'auto' }}>
      <Typography variant="h4">Login</Typography>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} component="form" noValidate>
        <TextField
          label="Login"
          variant="standard"
          autoComplete="username"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          helperText='Students enter only their album number. Staff provide their email address user ID, which is usually "[forename].[name]". In other cases, use the full mailbox address: "[username]@[domain at TUL]".'
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          helperText="For security reasons, log-off after use and close the browser!"
        />
        <Link to="/">
          <Button variant="contained" sx={{ mt: 3 }} onClick={() => auth?.login()}>
            Login
          </Button>
        </Link>
      </Box>
    </Paper>
  );
};

export default Login;
