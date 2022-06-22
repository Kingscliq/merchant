import Image from 'next/image';
import Box from '@mui/material/Box';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import { InputField } from '../FormModel';
import { Heading, Paragraph, Stack, Button } from '@components/index';

export const NewPass: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: '24px' }}>
        <Image src="/key.png" width="56px" height="56px" alt="payforce logo" />
      </Box>

      <Heading sx={{ textAlign: 'center' }}>Set up your account access</Heading>
      <Paragraph>
        Your new password must be different to previously used passwords.
      </Paragraph>

      <Box component="div">
        <Stack
          flexDirection="column"
          gap="20px"
          justifyContent="space-between"
          sx={{ textAlign: 'left', mt: '32px' }}
        >
          <InputField name="newPassword" label="Password" />
          <InputField name="confirmPassword" label="Confirm Password" />
        </Stack>
      </Box>

      <Button type="submit">Reset passwordS</Button>

      <Box
        component="div"
        alignItems="center"
        justifyContent="center"
        sx={{
          mb: { xs: '24px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <ArrowBackOutlinedIcon sx={{ mr: { xs: '8px', md: '8px' } }} />
        <Paragraph>Back To Login </Paragraph>
      </Box>
    </Box>
  );
};
