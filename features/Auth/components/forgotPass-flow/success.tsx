import Image from 'next/image';
import Box from '@mui/material/Box';
import { Paragraph, Heading, TextField, Button } from '@components/index';
import Stack from '@mui/material/Stack';

export function Success() {
  const handleSubmit = () => {
    alert('success');
  };

  return (
    <Stack
      flexDirection="column"
      sx={{
        px: { xs: '21px', lg: '540px' },
        textAlign: 'center',
        margin: 'auto',
        mt: { lg: '20px' },
        mb: '24px',
        m: 'auto',
        p: { lg: '0px' },
      }}
    >
      <Box sx={{ mt: { xs: '20px' } }}>
        <Box sx={{ mb: '24px' }}>
          <Image
            src="/success.png"
            width="56px"
            height="56px"
            alt="payforce logo"
          />
        </Box>

        <Heading sx={{ textAlign: 'center' }}>Password reset</Heading>
        <Paragraph>
          Your password has been successfully reset. Click below to log in
          magically.
        </Paragraph>

        <Box
          component="form"
          sx={{
            mb: { xs: '24px' },
            mt: { xs: '32px', lg: '30px' },
            // width: { xs: '100%', md: '30%', lg: '25%' },
            textAlign: 'left',
          }}
        >
          <Button fullWidth={true} onSubmit={handleSubmit}>
            Continue
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
