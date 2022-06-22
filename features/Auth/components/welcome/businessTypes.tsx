import { useRef } from 'react';
import Image from 'next/image';
import { Box, Grid, FormControlLabel, Radio } from '@mui/material';
import { Heading, Paragraph } from '@components/index';
import { Input, RadioInput } from './';

export const BusinessType: React.FC = ({
  handleChange,
  helperText,
  ...props
}: any): JSX.Element => {
  const individualRef = useRef(null);
  const corporateRef = useRef(null);

  const handleRadio = (e) => {
    handleChange('business_type', e.target.value);
  };

  return (
    <Box sx={{ mt: '58px', mb: '55px' }}>
      <Box component="div" sx={{ mb: '22px' }}>
        <Heading sx={{ fontSize: '16px', color: '#0F375A', mb: '7px' }}>
          Business Type
        </Heading>
        <Paragraph>Select type of Business</Paragraph>
      </Box>

      {/* radio buttons */}
      <RadioInput newValue={props.value} handleChange={handleRadio}>
        <FormControlLabel
          inputRef={individualRef}
          value="individual business"
          control={<Radio />}
          sx={{ display: 'none' }}
        />
        <FormControlLabel
          inputRef={corporateRef}
          value="corporate business"
          control={<Radio />}
          sx={{ display: 'none' }}
        />
      </RadioInput>

      <Grid
        container
        justifyContent="space-between"
        sx={{ mb: '55px', width: '63%' }}
      >
        <Grid
          sx={{
            background: '#F9F9FB',
            px: '21px',
            pt: '11px',
            pb: '52px',
            borderRadius: '8px',
            border: '1px solid #E5E5E5',
            boxShadow:
              '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
            width: '43%',
          }}
        >
          <Box
            component="div"
            onClick={() => {
              individualRef.current.click();
            }}
          >
            <Paragraph textAlign="right">
              {props.value === 'individual business' ? (
                <Image src="/vwelcome.png" width="35px" height="35px" />
              ) : (
                <Image src="/iwelcome.png" width="35px" height="35px" />
              )}
            </Paragraph>
            <Heading sx={{ fontSize: '16px' }}>Individual Business</Heading>
            <Paragraph>
              Self-employed, Self-owned business. With personal KYC documents
              you are good to go
            </Paragraph>
          </Box>
        </Grid>

        <Grid
          sx={{
            background: '#F9F9FB',
            px: '21px',
            pt: '11px',
            pb: '52px',
            borderRadius: '8px',
            border: '1px solid #E5E5E5',
            boxShadow:
              '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
            width: '43%',
          }}
        >
          <Box
            component="div"
            onClick={() => {
              corporateRef.current.click();
            }}
          >
            <Paragraph textAlign="right">
              {props.value === 'corporate business' ? (
                <Image src="/vwelcome.png" width="35px" height="35px" />
              ) : (
                <Image src="/iwelcome.png" width="35px" height="35px" />
              )}
            </Paragraph>
            <Heading sx={{ fontSize: '16px' }}>Corporate Business</Heading>
            <Paragraph>
              Your business is registered with the CAC and operates as a legal
              entity. You must be a director of the business to open an account
            </Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
