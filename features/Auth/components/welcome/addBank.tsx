import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormikContext } from 'formik';
import Image from 'next/image';
import { Box, MenuItem } from '@mui/material';
import { Stack, TextField, Heading, Paragraph } from '@components/index';

import { Input, Select } from './';

export const AddBank = ({
  selectvalue,
  selectonBlur,
  selectonChange,
  selecterror,
  selecttouched,
  selecthelperText,
  // input section
  inputvalue,
  inputonBlur,
  inputonChange,
  inputerror,
  inputtouched,
  inputhelperText,
}: any) => {
  const [banks, setBanks] = useState([]);
  const [accountName, setAccountName] = useState('');

  // const { setFieldValue } = useFormikContext();

  useEffect(() => {
    async function fetchBanks() {
      const response = await axios.get(
        'https://gateforce-bank.azurewebsites.net/api/v1/bank/GetBankList',
        {
          headers: {
            'X-REQUEST-LOCK': 'I8uG2k0Fax31vG',
          },
        }
      );
      console.log(response);
      setBanks(response.data.result);
    }
    return fetchBanks;
  }, []);

  useEffect(() => {
    async function fetchBankHolder() {
      for (let i = 0; i < banks.length; i++) {
        if (banks && banks[i].name === selectvalue) {
          // setAccountName;
          const res = axios.get(
            `https://gateforce-gateway-dev.azurewebsites.net/api/v2/t/mobile/transaction/customerInfo?customerID=${inputvalue}&paymentCode=${banks[i].bankCode}&billerCode=ZCDT`
          );

          console.log(res);
        }
      }
    }
    return fetchBankHolder;
  }, [banks, inputvalue, selectvalue]);
  // console.log(banks);

  return (
    <Box>
      <Heading sx={{ fontSize: '15px', color: '#0F375A', mb: '19px' }}>
        Add your bank account
      </Heading>

      <Box
        alignItems="center"
        sx={{
          display: 'flex',
          mb: '44px',
          width: '63%',
          justifyContent: 'space-between',
        }}
      >
        <Select
          value={selectvalue}
          onBlur={selectonBlur}
          onChange={selectonChange}
          error={selecterror}
          helperTexts={selecthelperText}
          label="Select Bank"
          name="bank_name"
          sx={{ width: '45%' }}
        >
          {banks &&
            banks.map((bank: any) => {
              return (
                <MenuItem key={bank.id} value={bank.name}>
                  {bank.name}
                </MenuItem>
              );
            })}
        </Select>

        <Input
          name="account_number"
          label="Enter your account number"
          sx={{ width: '45%' }}
          value={inputvalue}
          onBlur={inputonBlur}
          onChange={inputonChange}
          error={inputerror}
          helperText={inputhelperText}
        />
      </Box>

      <Stack justifyContent="space-between" sx={{ width: '70%', mb: '101px' }}>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            height: '6rem',
            background: '#E5E5E5',
            borderRadius: '10px',
          }}
        >
          <Paragraph>Account name appears here</Paragraph>
        </Box>

        {!selecttouched || !inputtouched || selecterror || inputerror ? (
          <Image width="70px" height="70px" src="/iwelcome.png" />
        ) : (
          <Image width="70px" height="70px" src="/vwelcome.png" />
        )}
      </Stack>
    </Box>
  );
};
