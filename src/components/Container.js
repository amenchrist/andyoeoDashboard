import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{bgColor: '#f1f2f6'}}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        {children}
      </Container>
    </React.Fragment>
  );
}