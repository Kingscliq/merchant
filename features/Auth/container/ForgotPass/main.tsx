import { useRouter } from 'next/router';
import type { SignupUser } from '@/types';
// inside same file ---usePhoneVerification
import {
  Credentials,
  VerifyPhone,
  NewPass,
  Success,
} from '../../components/forgotPass-flow';
import {
  forgotPassFlowCredentialsValidationSchema,
  forgotPassFlowOtpValidationSchema,
  forgotPassFlowNewPassValidationSchema,
} from '@/utils/validationSchema';
import { FormStep } from '@features/Auth/components/FormModel';
import { MultiStep } from '@features/Auth/components/forgotPass-flow';
import { usePasswordReset, useSendOtp, useConfirmOtp } from '@features/Auth';

export const ResetPassFlow: React.FC = (): JSX.Element => {
  const router = useRouter();

  const { mutateAsync: resetPassword } = usePasswordReset();
  const { mutateAsync: sendOtp } = useSendOtp();
  const { mutateAsync: confirmOtp } = useConfirmOtp();
  // const { mutateAsync: register } = useSignup();

  return (
    <>
      <MultiStep
        validationSchema={forgotPassFlowNewPassValidationSchema}
        initialValues={{ userName: '', newPassword: '', confirmPassword: '' }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        <FormStep
          validationSchema={forgotPassFlowCredentialsValidationSchema}
          hasData="true"
          // btnName="Reset password"
          btnWidth="100%"
          onSubmit={async (values: any) => {
            const newValues = {
              identifier: values.userName,
              otp: '',
              bvn_otp: true,
              device_imei_otp: true,
            };

            const res = await sendOtp(newValues);
            console.log(res);
          }}
        >
          <Credentials />
        </FormStep>

        <FormStep
          validationSchema={forgotPassFlowOtpValidationSchema}
          hasData="true"
          // btnName="Proceed"
          btnWidth="100%"
          onSubmit={async (values: any) => {
            const newValues = {
              identifier: values.userName,
              otp: values.otp,
              bvn_otp: true,
              is_device_imei_otp: true,
            };

            const res = await confirmOtp(newValues);
            console.log(res);
          }}
        >
          <VerifyPhone />
        </FormStep>

        <FormStep
          validationSchema={forgotPassFlowNewPassValidationSchema}
          hasData="true"
          btnName="Reset password"
          onSubmit={async (values: any) => {
            const newValues = {
              user_name: values.userName,
              new_password: values.newPassword,
              confirm_password: values.confirmPassword,
            };

            const res = await resetPassword(newValues);
            console.log(res);
            console.log(JSON.stringify(newValues));
          }}
        >
          <NewPass />
        </FormStep>

        <FormStep
          hasData="true"
          onSubmit={(values: any) => {
            console.log(values);
          }}
        >
          <Success />
        </FormStep>
      </MultiStep>
    </>
  );
};
