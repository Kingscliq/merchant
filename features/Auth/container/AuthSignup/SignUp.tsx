import { Box, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormikContext } from 'formik';

import { Link, Stack, Paragraph, Heading, Button } from '@components/index';
import {
  InputField,
  CheckboxField,
  SelectField,
} from '@features/Auth/components/FormModel';

export const Signup: React.FC = () => {
  const [states, setStates] = useState('');
  const [lga, setLga] = useState('');

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    const fetchState = async () => {
      const state = await axios.get(
        'https://gateforce-identity-dev.azurewebsites.net/api/v1/merchantportal/States'
      );
      setStates(state.data.result);
    };
    return fetchState;
  }, []);

  return (
    <>
      <Box xs={12}>
        <Box
          sx={{
            width: '100%',
            mt: { md: '56px' },
            pt: { xs: '16px', lg: '56px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Heading
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              color: '#0F375A',
            }}
          >
            Get started
          </Heading>
          <Paragraph
            sx={{ color: '#667085' }}
            mb="12px"
            className="text-cf-gray-100"
          >
            Let’s get you started on going beyond banks
          </Paragraph>

          <Box
            sx={{
              height: '2px',
              width: '100%',
              my: '12px',
              backgroundColor: '#FFAB00',
              mb: '27px',
            }}
          ></Box>
          <Stack gap={{ xs: '30px', lg: '10px' }}>
            <Box
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                margin: '0',
                padding: '0',
                width: '100%',
                gap: { xs: '30px', lg: '10px' },
              }}
            >
              <InputField
                name="first_name"
                label="First name"
                sx={{ width: { lg: '49%' } }}
              />

              <InputField
                name="last_name"
                label="Last name"
                sx={{ width: { lg: '49%' } }}
              />

              <InputField
                name="date_of_birth"
                // label="Date of birth"
                type="date"
                sx={{ width: { xs: '100%', lg: '49%' } }}
              />

              <InputField
                name="email"
                label="Email"
                sx={{ width: { lg: '49%' } }}
              />
            </Box>

            <SelectField name="gender" label="Gender">
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </SelectField>

            <SelectField
              name="state"
              label="State"
              sx={{ width: { xs: '100%', lg: '49%' } }}
              onChange={async (e) => {
                setFieldValue('state', e.target.value);

                try {
                  for (let i = 0; i < states.length; i++) {
                    if (states[i].state_name === e.target.value) {
                      const lga = await axios.get(
                        `https://gateforce-identity-dev.azurewebsites.net/api/v2/mobile/agent/getlga?stateid=${states[i].state_id}`
                      );

                      setLga(lga.data.result);
                    }
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {states &&
                states.map((state) => {
                  return (
                    <MenuItem key={state.state_id} value={state.state_name}>
                      {state.state_name}
                    </MenuItem>
                  );
                })}
            </SelectField>

            <SelectField
              name="lga"
              label="LGA"
              sx={{ width: { xs: '100%', lg: '49%' } }}
            >
              {lga &&
                lga.map((newLga) => {
                  return (
                    <MenuItem key={newLga.state_id} value={newLga.value}>
                      {newLga.value}
                    </MenuItem>
                  );
                })}
            </SelectField>

            <InputField name="address" label="Address" />
          </Stack>

          <Stack justifyContent="flex-start" sx={{ mt: '20px', width: '100%' }}>
            <CheckboxField name="terms" />
            <Paragraph sx={{ fontSize: { xs: '11px', md: '14px' }, ml: '2px' }}>
              I have read and accepted the
            </Paragraph>
            <Link
              color="secondary"
              to="/login"
              sx={{
                fontSize: { xs: '9px', md: '14px' },
                textDecoration: 'underline',
              }}
            >
              Terms and Conditions.
            </Link>
          </Stack>

          <Button type="submit">Create Account</Button>

          <Stack my="30px" mb="8%">
            <Paragraph sx={{ textAlign: 'center' }}>
              Already have an account?
            </Paragraph>
            <Link to="/login" color="secondary">
              Log in
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
