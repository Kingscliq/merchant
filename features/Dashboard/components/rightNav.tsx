import { Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Heading, Stack, Paragraph, Badge } from '@/components';
import { PageNav } from '@features/Dashboard';

export const RightNav: React.FC = (): JSX.Element => {
  return (
    <Box
      component="div"
      sx={{
        width: '80%',
        m: 'auto',
        borderRadius: '8px',
      }}
    >
      <Box
        component="div"
        sx={{
          background: '#F9F9FB',
          py: '17px',
          pl: '18px',
          boxShadow:
            ' 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          borderRadius: '8px',
          mb: '23px',
        }}
      >
        <Heading sx={{ textAlign: 'left' }}>Merchant Name</Heading>
        {/* user info */}
        <Stack
          justifyContent="space-between"
          alignItems="flex-end"
          // gap={12}
          sx={{
            width: '100%',
          }}
        >
          <Stack
            justifyContent="flex-start"
            alignItems="flex-end"
            gap={12}
            sx={{ width: '80%' }}
          >
            <Paragraph>Icon</Paragraph>
            <Box>
              <Heading sx={{ fontWeight: '400', fontSize: '14px' }}>
                Merchant ID
              </Heading>
              <Paragraph>234561789</Paragraph>
            </Box>
          </Stack>
          <Badge>
            <MoreVertIcon />
          </Badge>
        </Stack>
      </Box>

      {/* navigations */}
      <PageNav />
    </Box>
  );
};
