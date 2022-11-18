import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Divider, Paper, Typography } from '@mui/material';
import DataTextField from './DataTextField';

type PersonalData = {
  name: string;
  surname: string;
  fatherName: string;
  birthPlace: string;
  birthDate: string;
  pesel: string;
  phone: string;
  address: PersonalDataAddress;
};

type PersonalDataAddress = {
  street: string;
  streetNo: string;
  apartment: string;
  postcode: string;
  city: string;
  voivodeship: string;
};

const PersonalDataPage = () => {
  const [data, setData] = useState<PersonalData>({
    name: '',
    surname: '',
    fatherName: '',
    birthPlace: '',
    birthDate: '',
    pesel: '',
    phone: '',
    address: {
      street: '',
      streetNo: '',
      apartment: '',
      postcode: '',
      city: '',
      voivodeship: '',
    },
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:5000/personal');
      setData(response.data);
    })();
  }, []);

  return (
    <Paper sx={{ p: 5, width: 420, m: 'auto' }}>
      <Typography variant="h4">Personal Data</Typography>
      <Divider />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Name" value={data.name} />
          <DataTextField label="Surname" value={data.surname} />
          <DataTextField label="Father name" value={data.fatherName} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Place of birth" value={data.birthPlace} />
          <DataTextField label="Date of birth" value={data.birthDate} />
          <DataTextField label="PESEL identifier" value={data.pesel} />
        </Box>
      </Box>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Address
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Street" value={data.address.street} />
          <DataTextField label="Street no" value={data.address.streetNo} />
          <DataTextField label="Apartment" value={data.address.apartment} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Postcode" value={data.address.postcode} />
          <DataTextField label="City" value={data.address.city} />
          <DataTextField label="Voivodeship" value={data.address.voivodeship} />
        </Box>
      </Box>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Phone numbers
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <DataTextField label="Phone number" value={data.phone} />
        </Box>
      </Box>
    </Paper>
  );
};

export default PersonalDataPage;
