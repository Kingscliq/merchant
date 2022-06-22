import Box from '@mui/material/Box';
import { useFormikContext } from 'formik';

// import { axios } from '@/lib/axios';
import { InputField } from '../../FormModel';
import { verifyPhone } from '@features/Auth';
import { Heading, Paragraph, Stack, Link } from '@components/index';

export default function Index() {
  const { mutateAsync: confirmPhone } = verifyPhone();

  const {
    values: { phone_number },
  } = useFormikContext();
  // console.log(values);
  return (
    <Box sx={{ mt: { lg: '160px' } }}>
      <Heading sx={{ textAlign: 'center' }}>Verify number!</Heading>
      <Paragraph sx={{ mb: '100px' }}>
        Enter 6-digit Code code we have sent to at{' '}
        <Paragraph
          color="secondary"
          component="span"
          textAlign={{ xs: 'center', lg: 'left' }}
          sx={{ fontWeight: 'bold' }}
        >
          +234 {phone_number}
        </Paragraph>
      </Paragraph>

      <Stack>
        <InputField name="otp" label=" Verification Code" />
      </Stack>

      <Box sx={{ textAlign: 'center', mt: '42px' }}>
        <Paragraph>Didn’t receive the code?</Paragraph>
        <Paragraph>
          <Link
            color="#FFAB00"
            to="/"
            sx={{
              textDecoration: 'underline',
              fontWeight: '700',
              cursor: 'pointer',
            }}
            onClick={async () => {
              const res = await confirmPhone(phone_number);
              console.info(res);
            }}
          >
            Resend Code
          </Link>
        </Paragraph>
      </Box>
    </Box>
  );
}
