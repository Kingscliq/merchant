import { Navbar, RightNav } from '../components';
import { Grid } from '@mui/material';

export const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <Grid container sx={{ pr: '18px' }}>
        <Grid
          xs={2.3}
          sx={{
            background: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            py: '29px',
            position: 'sticky',
            top: '0',
          }}
          gap={23}
        >
          <RightNav />
        </Grid>
        <Grid xs={8}>my date</Grid>
      </Grid>
    </>
  );
};
