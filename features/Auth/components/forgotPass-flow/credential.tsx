import Box from '@mui/material/Box';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Paragraph, Heading, Button } from '@components/index';
import { InputField } from '../FormModel';

export const Credentials: React.FC = () => {
  return (
    <Box sx={{ mt: { xs: '40px' } }}>
      <Heading sx={{ textAlign: 'center' }}>Forgot password?</Heading>
      <Paragraph>No worries, we’ll help you reset your password</Paragraph>

      <Box
        component="div"
        sx={{
          mb: { xs: '24px' },
          mt: { xs: '32px', lg: '30px' },
          textAlign: 'left',
        }}
      >
        <Box>
          <InputField label="Enter your username" name="userName" />
          <Button type="submit">Reset password</Button>
        </Box>
      </Box>

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
