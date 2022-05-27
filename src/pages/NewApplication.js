import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DirectionStack from '../components/Stack';

export default function ApplicationForm() {

  return (
      <div className='ba b-black pt5 pb5'>
        <div className='flex justify-center pa3 ba b-grey'>
            <DirectionStack />
        </div>
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
          <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
            

        </Box>
      </div>
    
  );
}