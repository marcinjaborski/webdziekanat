import { Box, Card, Divider, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Term = {
  name: string;
  date: string;
};

const Terms = () => {
  const [terms, setTerms] = useState<Term[]>();

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:5000/terms');
      setTerms(response.data);
    })();
  }, []);
  return (
    <Paper sx={{ p: 5, m: 'auto' }}>
      <Typography variant="h4">Terms</Typography>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {terms?.map((term, index) => (
          <Card
            key={index}
            elevation={5}
            sx={{
              p: 5,
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5">{term.name}</Typography>
            <Typography variant="h6">{term.date}</Typography>
          </Card>
        ))}
      </Box>
    </Paper>
  );
};

export default Terms;
