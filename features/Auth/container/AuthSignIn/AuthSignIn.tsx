import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import type { BoxProps } from '@mui/material';
import { useAuthSignin } from '@features/Auth';
import type { SigninValues } from '@features/Auth';
import { Heading } from '@components/Typography';

interface AuthSignInProps extends BoxProps {}

export const AuthSignIn: React.FC<AuthSignInProps> = (props): JSX.Element => {
  const { mutateAsync: signinSubmit } = useAuthSignin();
  const [formValues] = useState<SigninValues>({
    userName: '',
    password: 'team mates',
  });

  const handleSubmit = async () => {
    console.log('submit');

    try {
      const res = await signinSubmit(formValues);
      console.log(res);
    } catch (err) {
      console.error(`Error signing in: ${err}`);
    }
  };
  return (
    <Box>
      <Heading>Sign In!!</Heading>
      <Button onClick={handleSubmit}>Sign In</Button>
    </Box>
  );
};
