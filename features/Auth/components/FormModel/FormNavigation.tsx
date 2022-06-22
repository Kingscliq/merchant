import React from 'react';
import type { FormikValues } from 'formik';
import { Button, Stack } from '@/components';

interface Props {
  hasPrevious?: boolean;
  isLastStep: boolean;
  onBackClick: (values: FormikValues) => void;
  btnName: string;
  btnWidth: string;
  hasData: string;
  isLoading?: boolean;
}

export const FormNavigation = (props: Props) => {
  return (
    <Stack justifyContent="center">
      {!props.hasData && (
        <>
          {/* {props.hasPrevious && (
            <Button sx={{ width: { lg: '40%' } }} onClick={props.onBackClick}>
              Back
            </Button>
          )} */}

          <Button
            sx={{ width: { lg: props.btnWidth ? 'props.btnWidth' : '40%' } }}
            type="submit"
            loading={props.isLoading}
          >
            {props.isLastStep ? 'Submit' : props.btnName}
          </Button>
        </>
      )}
    </Stack>
  );
};
