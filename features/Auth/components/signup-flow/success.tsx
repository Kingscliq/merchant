import Image from 'next/image';
import Box from '@mui/material/Box';
import { Heading, Button, Paragraph } from '@components/index';

export default function Index() {
  return (
    <>
      <Heading sx={{ mt: { lg: '160px' }, pb: '6px', textAlign: 'center' }}>
        Account created!
      </Heading>
      <Paragraph sx={{ pb: '6px', textAlign: 'center' }}>
        We are glad to have you on board!
      </Paragraph>

      <Box
        sx={{
          // display: { xs: "block", lg: "none" },
          width: '100%',
          m: 'auto',
          textAlign: 'center',
          mt: '48px',
          mb: '36px',
        }}
      >
        <Image
          src="/thumbs.png"
          width="186px"
          height="168px"
          alt=""
          className="mobile-logo"
        />
      </Box>
    </>
  );
}
