import { useRouter } from 'next/router';
import { useState } from 'react';
import type { SignupUser } from '@/types';
// inside same file ---usePhoneVerification
import {
  verifyPhone,
  verifyOtp,
  verifyBvn,
  useSignup,
  createUser,
  registerUser,
} from '@features/Auth';
import {
  signupBvn,
  signupMobile,
  signupFlow1,
  signupCredentials,
  confirmSignupMobile,
  signupValidationSchema,
} from '@/utils/validationSchema';
import { MultiStepForm, FormStep } from '@features/Auth/components/FormModel';
import { Signup } from './index';
import {
  AuthMobile,
  ConfirmMobile,
  AuthBvn,
  SignupCredentials,
  SignupSuccess,
} from '../../components/index';
import { useAppSelector } from '@store/hooks';
import { selectLoading } from '@features/Counter/Loading.store';
import { FormikValues, useFormikContext } from 'formik';

export const SignupFlow: React.FC = (): JSX.Element => {
  const [idSet, setId] = useState(0);
  console.log(idSet);

  const initialValues: SignupUser = {
    app_id: 3,
    password: '',
    confirm_password: '',
    username: '',
    bvn: '',
    email: '',
    phone_number: '',
    first_name: '',
    last_name: '',
    address: '',
    state: '',
    lga: '',
    otp: '',
    date_of_birth: '',
    // agentid: 21248,
  };

  const router = useRouter();

  const { mutateAsync: confirmPhone } = verifyPhone();
  const { mutateAsync: confirmOtp } = verifyOtp();
  const { mutateAsync: confirmBvn } = verifyBvn();
  const { mutateAsync: signup } = useSignup();
  const { mutateAsync: create } = createUser();
  const { mutateAsync: register } = registerUser();

  const isLoading = useAppSelector(selectLoading);

  return (
    <>
      <MultiStepForm
        validationSchema={signupValidationSchema}
        onSubmit={async (values) => {
          const res = await singup(values);
          console.log(res);
          router.push('/login');
        }}
        initialValues={initialValues}
      >
        <FormStep
          validationSchema={signupFlow1}
          hasData="true"
          btnName="Create account"
          btnWidth="100%"
          onSubmit={(values: any) => console.log(JSON.stringify(values))}
        >
          <Signup />
        </FormStep>
        <FormStep
          validationSchema={signupMobile}
          onSubmit={async (values: Record<string, number>) => {
            const res = await confirmPhone(values.phone_number);

            console.log(res);
            console.log(values.phone_number);
          }}
          btnName="Send Code"
          isLoading={isLoading}
        >
          <AuthMobile />
        </FormStep>

        <FormStep
          validationSchema={confirmSignupMobile}
          onSubmit={async (values: Record<string, number>) => {
            const newValues: Record<string, number> = {
              identifier: values.phone_number,
              otp: values.otp.toString(),
            };
            const res = await confirmOtp(newValues);
            console.log(res);
          }}
          btnName="proceed"
        >
          <ConfirmMobile />
        </FormStep>
        <FormStep
          validationSchema={signupBvn}
          onSubmit={async (values: Record<string, number>) => {
            const newValues = {
              bvn: values.bvn.toString(),
              phone_number: values.phone_number.toString(),
              first_name: values.first_name,
              last_name: values.last_name,
              address: values.address,
              state: values.state,
              lga: values.lga,
              email: values.email,
              date_of_birth: values.date_of_birth,
            };

            // verify bvn
            const res = await confirmBvn(values.bvn);

            // check bvn success
            if (res.data.error_message === null) {
              console.log(res);
              // setFieldValue('app_id');
              try {
                const response = await register(newValues);
                console.log(response);
                setId(response.data.result.agentid);
              } catch (err) {
                console.error(err);
              }
              console.log(idSet);
            }
          }}
          btnName="Verify"
        >
          <AuthBvn />
        </FormStep>
        <FormStep
          validationSchema={signupCredentials}
          onSubmit={async (values: FormikValues) => {
            // if (values.password !== values.confrm_password) return;

            const newValues: FormikValues = {
              username: values.username,
              password: values.password,
              confirm_password: values.confirm_password,
              agentid: idSet,
            };
            const res = await create(newValues);
            console.log(res);
          }}
          btnName="set access"
        >
          <SignupCredentials />
        </FormStep>
        <FormStep
          // validationSchema={signupValidationSchema}
          onSubmit={() => {
            router.push('/login');
          }}
          btName="let's go"
        >
          <SignupSuccess />
        </FormStep>
      </MultiStepForm>
    </>
  );
};
