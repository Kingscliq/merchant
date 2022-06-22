import Image from 'next/image';
import { Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { TextField, Paragraph, Chip, Badge } from '@/components';

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{
        display: 'flex',
        // width: '93.5%',
        height: '100%',
        background: '#0F375A',
        px: '55px',
        py: '24px',
        position: 'sticky',
        top: '0',
      }}
    >
      <Box component="div" sx={{ width: 'auto' }}>
        <Image
          src="/payforce_light.png"
          width="210px"
          height="55px"
          alt=""
          className="mobile-logo"
        />
      </Box>

      <TextField
        label="Search transactions, billers, payment references"
        sx={{
          width: '30%',
          '& .MuiInputBase-root': {
            background: 'white',
            borderRadius: '8px',
          },
        }}
      />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Paragraph color="white" sx={{ fontWeight: '500' }}>
          Status:
        </Paragraph>
        <Chip color="success" label="Active" />
      </Box>

      <Paragraph color="white" sx={{ fontWeight: '500' }}>
        API Documentation
      </Paragraph>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          variant="dot"
          color="warning"
        >
          <NotificationsActiveIcon sx={{ color: 'white' }} />
        </Badge>

        <Badge>
          <HelpIcon sx={{ color: 'white' }} />
        </Badge>
      </Box>
    </Box>
  );
};
