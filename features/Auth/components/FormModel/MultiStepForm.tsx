import Image from 'next/image';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import type { FormikValues, FormikConfig, FormikHelpers } from 'formik';

import { FormNavigation } from './index';
import { Stepper } from '../index';
import { Stack, Paragraph } from '@components/index';

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

interface ISteps {
  label: string;
  description: string;
}

export const MultiStepForm = ({ children, initialValues, onSubmit }: Props) => {
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [snapShot, setSnapShot] = useState(initialValues);

  const steps = React.Children.toArray(
    children
  ) as unknown as React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  const step: any = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const stepDetails: ISteps[] = [
    {
      label: 'Your details',
      description: 'Please provide your name and email',
    },
    {
      label: 'Verify your Phone number',
      description: 'OTP will be sent to your phone',
    },
    {
      label: 'Verify OTP',
      description: 'Enter the OTP sent to your phone',
    },
    {
      label: 'Verify your BVN',
      description: 'Enter your 11-digits Bank Verification Number',
    },
    {
      label: 'Username & Password',
      description: 'Create your login credentials',
    },
    { label: 'You are all set!', description: 'Enter your Payforce account' },
  ];

  const next = (values: FormikValues) => {
    setSnapShot(values);
    setStepNumber((stepNumber) => stepNumber + 1);
  };

  const prev = (values: FormikValues) => {
    setSnapShot(values);
    setStepNumber((stepNumber) => stepNumber - 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      // await step.props.onSubmit(values.phone_number );
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  // alert(JSON.stringify(step.props.btnName));

  return (
    <Grid container>
      {/* left section */}
      {stepNumber === 0 ? (
        <Grid
          xs={5}
          sx={{
            display: { xs: 'none', lg: 'grid' },
            alignContent: 'space-between',
            color: 'white',
            px: '48px',
            backgroundImage: `url(/Section.jpg)`,
            pb: '5%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              mt: '48px',
              mb: '60px',
            }}
          >
            <Image
              width="204px"
              height="49px"
              src="/payforce_light.png"
              alt=""
              className="hidden md:block"
            />
          </Box>

          <Stack justifyContent="space-between">
            <Paragraph color="white">&copy; PAYFORCE 2018-2022</Paragraph>
            <Paragraph color="white">support@payforce.io</Paragraph>
          </Stack>
        </Grid>
      ) : (
        <Grid
          xs={4}
          sx={{
            display: { xs: 'none', lg: 'inline-block' },
            background: '#0F375A',
            color: 'white',
            px: '48px',
          }}
        >
          <Stack justifyContent="flex-start" sx={{ mb: '50%' }}>
            <Box
              sx={{
                width: '100%',
                mt: '48px',
                mb: '60px',
              }}
            >
              <Image
                src="/payforce_light.png"
                width="210px"
                height="55px"
                alt=""
                className="mobile-logo"
              />
            </Box>

            <Stepper
              steps={stepDetails}
              activeStep={stepNumber}
              setActiveStep={setStepNumber}
            />
          </Stack>

          <Stack justifyContent="space-evenly" sx={{ mb: '10%' }}>
            <Paragraph color="white" sx={{ fontSize: '12px' }}>
              &copy; Payforce 2018-2022
            </Paragraph>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/Icon.png" width="13px" height="10px" alt="" />{' '}
              <Paragraph color="white" sx={{ ml: '3px', fontSize: '12px' }}>
                support@payforce.io
              </Paragraph>
            </Box>
          </Stack>
        </Grid>
      )}

      {/* right section */}
      <Grid
        xs={12}
        md={6}
        sx={{
          px: { xs: '28.5px' },
          // pt: { lg: "112px" },
          pb: '8px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', lg: 'none' },
            // width: "100%",
            m: 'auto',
            textAlign: 'center',
            mt: '48px',
            mb: '60px',
          }}
        >
          <Image
            src="/payforce_dark.png"
            width="210px"
            height="55px"
            alt=""
            className="mobile-logo"
          />
        </Box>

        <Formik
          initialValues={snapShot}
          onSubmit={handleSubmit}
          validationSchema={step.props.validationSchema}
        >
          {(formik) => (
            <Form>
              <Box
                component="div"
                sx={{
                  px: { lg: stepNumber !== 0 && '28%' },
                }}
              >
                {step}
              </Box>
              <FormNavigation
                isLastStep={isLastStep}
                hasPrevious={stepNumber > 0}
                onBackClick={() => prev(formik.values)}
                btnName={step.props.btnName}
                btnWidth={step.props.btnWidth}
                hasData={step.props.hasData}
                isLoading={step.props.isLoading}
              />
            </Form>
          )}
        </Formik>

        {stepNumber > 0 && (
          <Stack
            justifyContent="space-evenly"
            alignItems="center"
            alignContent={{ lg: 'space-between' }}
            sx={{
              height: { lg: '100%' },
              width: '100%',
              pt: '25%',
              pb: { lg: '16px' },
            }}
          >
            {Array<number>(5)
              .fill(0)
              .map((item, index: number) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: '40px', md: '80px' },
                    height: '8px',
                    borderRadius: '8px',
                    background:
                      index === stepNumber - 1 ? '#0F375A' : '#D0DCE7',
                  }}
                ></Box>
              ))}
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export const FormStep = ({ children }: any) => children;
