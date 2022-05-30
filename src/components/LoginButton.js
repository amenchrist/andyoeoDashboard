import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

  return (
    <Button variant='contained' size='large' onClick={() => loginWithRedirect()}>
        LOGIN
    </Button>
  )
}

export default LoginButton