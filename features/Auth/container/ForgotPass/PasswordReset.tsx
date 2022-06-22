import Image from 'next/image';
import { useFormik } from 'formik';
import { Box } from '@mui/material';
import { usePasswordReset } from '@features/Auth';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import { resetPasswordValidationSchema } from '@utils/validationSchema';
import {
  Heading,
  Paragraph,
  Stack,
  TextField,
  Button,
} from '@components/index';

export const PasswordReset = () => {
  const { mutateAsync: resetPassword } = usePasswordReset();
  const { handleChange, errors, values, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        username: '',
      },
      validationSchema: resetPasswordValidationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        resetPassword(values);
      },
    });

  const handleSubmission = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        px: { xs: '16px', lg: '540px' },
        textAlign: 'center',
        margin: 'auto',
        mt: { lg: '24px' },
        m: 'auto',
        p: { lg: '0px' },
      }}
    >
      <Box sx={{ textAlign: 'center', mt: '48px' }}>
        <Image
          src="/payforce_dark.png"
          width="210px"
          height="55px"
          alt=""
          className="mobile-logo"
        />
      </Box>

      <Box
        sx={{
          mt: { xs: '64px' },
          mb: { xs: '32px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '3px',
        }}
      >
        <Heading variant="h5" sx={{ textAlign: 'center' }}>
          Forgot Password?
        </Heading>

        <Paragraph>
          {'No worries, we’ll help you reset your password'}
        </Paragraph>

        <Box
          component="form"
          onSubmit={handleSubmission}
          sx={{ my: { xs: '16px' } }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              w: '100%',
            }}
          >
            <TextField
              label="Username"
              variant="outlined"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
              name="username"
              error={!!(errors.username && touched.username)}
              helperText={errors.username}
              id="filled-error-helper-text"
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ my: { xs: '24px', md: '24' } }}
              type="submit"
            >
              Reset Password
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        component="div"
        alignItems="center"
        justifyContent="center"
        sx={{
          mb: { xs: '24px' },
          width: { xs: '100%', md: '30%', lg: '25%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ArrowBackOutlinedIcon sx={{ mr: { xs: '8px', md: '8px' } }} />
        <Paragraph>Back To Login </Paragraph>
      </Box>
    </Stack>
  );
};
