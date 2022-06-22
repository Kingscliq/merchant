import Box from '@mui/material/Box';
import { Heading, Paragraph } from '@components/index';
import { InputField } from '../../FormModel';

export default function Index() {
  return (
    <>
      <Box sx={{ mt: { lg: '160px' } }}>
        <Heading sx={{ textAlign: 'center' }}>Verify your BVN</Heading>
        <Paragraph sx={{ mb: '67px' }}>
          Please ensure that the name and phone number on your BVN is the same
          as the name you used during your registration.
        </Paragraph>

        <InputField name="bvn" label="BVN" />
      </Box>
    </>
  );
}
