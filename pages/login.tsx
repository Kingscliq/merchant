import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import {
  Heading,
  Paragraph,
  Stack,
  TextField,
  Button,
  Link,
} from '@components/index';
import type { SigninValues } from '@features/Auth';
import { useAuthSignin } from '@features/Auth';
import { loginValidationSchema } from '@utils/validationSchema';
import { useFormik } from 'formik';

const initialValues: SigninValues = {
  userName: '',
  password: '',
};

const LoginPage: React.FC = (): JSX.Element => {
  const { mutateAsync: signinSubmit } = useAuthSignin();

  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useFormik<SigninValues>({
      initialValues,
      validationSchema: loginValidationSchema,
      onSubmit: async (values) => {
        try {
          const data = await signinSubmit(values);
          // console.log(data);
        } catch (err) {
          console.error(`Error discovered in Login component: ${err}`);
        }
      },
    });

  const handleSubmission = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Stack
      flexDirection="column"
      sx={{
        px: { xs: '16px', lg: '540px' },
        textAlign: 'center',
        margin: 'auto',
        mt: { lg: '24px' },
        m: 'auto',
        p: { lg: '0px' },
      }}
    >
      <Box
        component="div"
        sx={{
          mt: { xs: '64px' },
          mb: { xs: '32px' },
        }}
      >
        <Box sx={{ mb: '60px' }}>
          <Image
            src="/payforce_dark.png"
            width="210px"
            height="55px"
            alt="payforce logo"
          />
        </Box>

        <Heading>Log in to your account</Heading>
        <Paragraph>Welcome back! Please enter your details.</Paragraph>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmission}
        sx={{
          mb: { xs: '24px' },
          width: { xs: '100%', md: '30%', lg: '25%' },
        }}
      >
        <Stack
          flexDirection="column"
          sx={{
            width: '100%',
            mb: '12px',
            textAlign: 'left',
          }}
          gap={21}
        >
          <Box sx={{ width: '100%' }}>
            <TextField
              // id="outlined-basic"
              label="Enter your username"
              variant="outlined"
              type="text"
              name="userName"
              // id="email"
              value={values.userName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!(errors.userName && touched.userName)}
              helperText={errors.userName}
            />
          </Box>

          <Box sx={{ width: '100%' }}>
            <TextField
              // id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!(errors.password && touched.password)}
              helperText={errors.password}
            />
          </Box>

          <Box sx={{ width: '100%' }}>
            <Button type="submit">Sign in</Button>
          </Box>
        </Stack>
      </Box>
      <Stack>
        <Paragraph> Don’t have an account? </Paragraph>
        <Link to="/signup" sx={{ display: 'flex' }} color="secondary">
          Sign up
        </Link>
      </Stack>
      <Link to="/forgot_password" sx={{ display: 'flex' }} color="secondary">
        Forgot password
      </Link>
    </Stack>
  );
};

export default LoginPage;
