import Image from 'next/image';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import type { FormikValues, FormikConfig, FormikHelpers } from 'formik';

import { Stack } from '@components/index';
import { FormNavigation } from '../FormModel/index';

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

interface ISteps {
  label: string;
  description: string;
}

export const MultiStep = ({ children, initialValues, onSubmit }: Props) => {
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
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Stack
      justifyItems="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        px: { xs: '28.5px' },
        pb: '8px',
        margin: 'auto',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
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
            <Box component="div" sx={{ width: { lg: '80%' }, margin: 'auto' }}>
              {step}
              <FormNavigation
                isLastStep={isLastStep}
                hasPrevious={stepNumber > 0}
                onBackClick={() => prev(formik.values)}
                btnName={step.props.btnName}
                btnWidth={step.props.btnWidth}
                hasData={step.props.hasData}
                isLoading={step.props?.isLoading}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export const FormStep = ({ children }: any) => children;
