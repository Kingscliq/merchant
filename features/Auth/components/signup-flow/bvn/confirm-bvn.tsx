import Box from '@mui/material/Box';
import {
  Heading,
  Paragraph,
  TextField,
  Button,
  Stack,
  Link,
} from '@components/index';

export default function Index({ next, prev }) {
  return (
    <Box>
      <Heading sx={{ textAlign: 'center' }}>Verify your BVN!</Heading>
      <Paragraph mb="67px">
        Please ensure that the name and phone number on your BVN is the same as
        the name you used during your registration.
      </Paragraph>

      <Stack sx={{ mt: '32px', color: '#667085' }}>
        <TextField type="number" label="Enter BVN" />
      </Stack>

      {/* <Paragraph className="!text-center mt-12 text-cf-primary-100">
        Please wait while we verify your BVN
      </Paragraph> */}

      <Button onClick={next}>VERIFY</Button>
    </Box>
  );
}
