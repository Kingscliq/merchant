import { useFormik, Formik, Form } from 'formik';
import { Box } from '@mui/material';

import { Paragraph, Button, Heading, TextField } from '@components/index';
import { welcomeValidationSchema } from '@utils/validationSchema';
import { InputField } from '../components/FormModel';
import {
  Header,
  Card as Uploads,
  BusinessName,
  Input,
  BusinessType,
  AddBank,
} from '../components';
import { useState } from 'react';
import { axios } from '@/lib/axios';
import { useSelector } from 'react-redux';
import { user } from '../Auth.store';
import { toast } from 'react-toastify';
import type { RootState } from '@store/types';
import { capitalize } from '@utils/formatters';
import { useRouter } from 'next/router';

interface WelcomeProps {
  Identity: any;
  business_evidence: any;
  business_name: string;
  business_type: string;
  bank_name: string;
  account_number: string;
}

export const Welcome: React.FC<{}> = () => {
  const initialValues: WelcomeProps = {
    Identity: null,
    business_evidence: null,
    business_name: '',
    business_type: 'corporate business',
    bank_name: '',
    account_number: '',
  };

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);
  console.log(user?.agent_id);
  const {
    errors,
    values,
    touched,
    handleChange,
    setFieldValue,
    handleSubmit,
    handleBlur,
  } = useFormik<WelcomeProps>({
    initialValues,
    validationSchema: welcomeValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const formData = new FormData();

      formData.append('Identity', values.Identity);
      formData.append('EvidenceOfAddress', values.business_evidence);
      formData.append('BusinessName', values.business_name);
      formData.append('BusinessType', values.business_type);
      formData.append('Bank', values.bank_name);
      formData.append('AccountNumber', values.account_number);
      formData.append('AgentId', user?.agent_id as unknown as Blob); // FormData accepts only string and Blob data Types

      try {
        const res = await axios.post('/UploadKyc', formData);

        toast.success('KYC Uploaded Successfully');
        setLoading(false);
        router.push('/dashboard');
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error('Something went wrong!');
      }
    },
  });

  return (
    <Box
      component="form"
      sx={{ px: '113px', pb: '110px' }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Header />

      <Box
        sx={{
          height: '2px',
          width: '100%',
          marginBottom: '12px',
          backgroundColor: '#FFAB00',
          mt: '31px',
          mb: '55px',
        }}
      ></Box>
      <Box component="section" sx={{ px: '43px' }}>
        <Box sx={{ mb: '65px' }}>
          <Heading>Welcome {capitalize(user?.agent_username)}</Heading>
          <Paragraph>
            We are almost done with your account setup. Please update your
            information
          </Paragraph>
        </Box>

        <>
          <Uploads
            header={`Submit a Valid National ID (NIN, Driver’s Licence, International Passport, Voters Card)s`}
            text="Please scan any of your Government IDs - NIN, International
            Passport, Drivers’ License or Voters Card"
            setValue={setFieldValue}
            fileValue={values.Identity}
            name="Identity"
            value={values.Identity}
            onBlur={handleBlur}
            handleChange={handleChange}
            touched={!!touched.Identity}
            error={!!(errors.Identity && touched.Identity)}
            helperText={errors.Identity}
          />

          <Uploads
            header="Business Address evidence (Not less than 3 months)"
            text="Please scan a copy of your Utility bill of not less than 3 months"
            setValue={setFieldValue}
            fileValue={values.business_evidence}
            name="business_evidence"
            value={values.business_evidence}
            onBlur={handleBlur}
            handleChange={handleChange}
            touched={!!touched.business_evidence}
            error={!!(errors.business_evidence && touched.business_evidence)}
            helperText={errors.business_evidence}
          />
        </>

        <BusinessName
          value={values.business_name}
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!(errors.business_name && touched.business_name)}
          touched={!!touched.business_name}
          helperText={errors.business_name}
        />

        <BusinessType
          name="business_type"
          value={values.business_type}
          setValue={setFieldValue}
          onBlur={handleBlur}
          handleChange={setFieldValue}
          error={!!(errors.business_type && touched.business_type)}
          helperText={errors.business_type}
        />

        <AddBank
          // select bank
          selectvalue={values.bank_name}
          selectonBlur={handleBlur}
          selectonChange={handleChange}
          selecterror={!!(errors.bank_name && touched.bank_name)}
          selecttouched={!!touched.bank_name}
          selecthelperText={errors.bank_name}
          // account number
          inputvalue={values.account_number}
          inputonBlur={handleBlur}
          inputonChange={handleChange}
          inputerror={!!(errors.account_number && touched.account_number)}
          inputtouched={!!touched.account_number}
          inputhelperText={errors.account_number}
        />

        <Button type="submit" sx={{ width: '63%' }} loading={loading}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};
