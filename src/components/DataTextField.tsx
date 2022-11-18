import { TextField } from '@mui/material';

const DataTextField = (props: { label: string; value: string }) => {
  return (
    <TextField
      label={props.label}
      value={props.value}
      variant="standard"
      margin="dense"
      InputProps={{
        readOnly: true,
      }}
    />
  );
};

export default DataTextField;
