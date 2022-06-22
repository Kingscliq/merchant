import Box from '@mui/material/Box';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import { InputField } from '../FormModel';
import { Paragraph, Button, Stack } from '@components/index';

export const VerifyPhone = () => {
  return (
    <Box>
      <Paragraph sx={{ mb: '50px' }}>
        Enter 6-digit Code code we have sent to at{' '}
        <Paragraph
          color="secondary"
          component="span"
          textAlign={{ xs: 'center', lg: 'left' }}
          sx={{ fontWeight: 'bold' }}
        >
          +234 000 000 0000.
        </Paragraph>
      </Paragraph>

      <>
        <Stack sx={{ color: '#667085' }} justifyContent="flex-start">
          <InputField
            // type="number"
            label="Enter verification code"
            name="otp"
          />
        </Stack>
        <Button type="submit">PROCEED</Button>
      </>

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

      {/* <Paragraph className="!text-center mt-12 text-cf-primary-100">
        Please wait while we verify your BVN
      </Paragraph> */}
    </Box>
  );
};
