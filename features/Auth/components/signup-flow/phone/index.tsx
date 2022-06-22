import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { Heading, Paragraph, Stack } from '@components/index';
import { InputField } from '../../FormModel';

export default function Index() {
  return (
    <>
      <Box>
        <Heading sx={{ textAlign: 'center' }}>
          Let’s verify your phone number
        </Heading>
        <Paragraph textAlign="center">
          Please enter your phone number. We will send you 6-digit code to
          verify your phone number.
        </Paragraph>

        <Stack
          justifyContent={{ xs: 'flex-start' }}
          sx={{ mt: '32px', color: '#667085' }}
        >
          <InputField
            name="phone_number"
            label="Mobile"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+234</InputAdornment>
              ),
              inputMode: 'numeric',
              pattern: '[0-9]*',
            }}
          />
        </Stack>
      </Box>
    </>
  );
}
// inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
