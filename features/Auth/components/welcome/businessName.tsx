import Image from 'next/image';
import { Box } from '@mui/material';

import { Input } from './';
import { Stack, Heading } from '@components/index';

export const BusinessName: React.FC = ({ ...props }: any) => {
  return (
    <Box>
      <Heading sx={{ fontSize: '15px', color: '#0F375A' }}>
        Business Name
      </Heading>

      <Stack justifyContent="flex-start" alignItems="top" gap="89px">
        <Input
          name="business_name"
          label=" Business Name"
          sx={{ width: '54%' }}
          {...props}
        />

        {!props.touched || props.error ? (
          <Image width="70px" height="70px" src="/iwelcome.png" />
        ) : (
          <Image width="70px" height="70px" src="/vwelcome.png" />
        )}
      </Stack>
    </Box>
  );
};
