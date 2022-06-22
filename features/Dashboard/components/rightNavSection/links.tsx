import Box from '@mui/material/Box';
import { Stack, Heading, Badge } from '@/components';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

interface Props {
  children?: React.ReactElement;
  header: string;
}

export const Link = ({ children, link, header }: Props) => {
  return (
    <Box sx={{ textAlign: 'left', marginBottom: '25px' }}>
      <Heading
        sx={{
          fontSize: '16px',
          color: '#0F375A',
          mb: '15px',
          textAlign: 'left',
        }}
      >
        {header}
      </Heading>
      <Stack gap={10} flexDirection="row">
        {children}
      </Stack>
    </Box>
  );
};

export const LinkItem = ({ children, link }) => {
  return (
    <Stack justifyContent="flex-start" gap={10} alignItems="">
      <Badge>{children}</Badge>
      <Heading sx={{ fontSize: '13px', color: '#000000', mt: '.3rem' }}>
        {link}
      </Heading>
    </Stack>
  );
};
