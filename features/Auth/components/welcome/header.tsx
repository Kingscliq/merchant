import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { Paragraph, Button } from '@components/index';
import { clearLocalStorage } from '@utils/localStorage';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Image
          src="/payforce_dark.png"
          width="210px"
          height="55px"
          alt=""
          className="mobile-logo"
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '18px',
          width: '100%',
        }}
      >
        <Paragraph>Want to Continue later?</Paragraph>
        <Button
          // variant="outliined"
          // color="primary"
          sx={{ width: '10%', height: '2rem' }}
          onClick={() => {
            clearLocalStorage();
            router.push('/login');
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
