import Box from '@mui/material/Box';
import { Heading, Paragraph, Stack } from '@components/index';
import { InputField } from '../FormModel';

export default function Index() {
  return (
    <Box sx={{ mt: { lg: '160px' } }}>
      <Heading sx={{ textAlign: 'center', mb: '51px' }}>
        Set up your account access
      </Heading>

      <Stack
        justifyContent="space-between"
        sx={{ textAlign: 'left', fontSize: '14px' }}
      >
        <Box sx={{ width: '100%', mb: '32px' }}>
          <InputField name="username" label="Username" />
          <Paragraph sx={{ display: { xs: 'none', md: 'block' } }}>
            Username is case-sensitive
          </Paragraph>
        </Box>

        <Box sx={{ width: '100%', mb: '32px' }}>
          <InputField name="password" label="Password" type="password" />

          <Paragraph sx={{ display: { xs: 'none', md: 'block' } }}>
            Should be more than 8 characters
          </Paragraph>
        </Box>

        <Box sx={{ width: '100%', mb: '32px' }}>
          <InputField
            name="confirm_password"
            label="Confirm Password"
            type="password"
          />
        </Box>
      </Stack>
    </Box>
  );
}
