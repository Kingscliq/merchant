import { axios } from '@/lib/axios';
import { useRouter } from 'next/router';
import type { SignupUser, AuthError } from '@/types';
import type { UseMutationOptions } from 'react-query';
import type { FormikValues } from 'formik';
import { useMutation } from 'react-query';

export interface SignupValues extends FormikValues {
  password: string;
  confirm_password: string;
  username: string;
  bvn: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  address: string;
  state: string;
  lga: string;
  date_of_birth: string;
}

export function useSignup(
  props?: UseMutationOptions<SignupValues | any, AuthError>
) {
  const router = useRouter();

  return useMutation<SignupValues, AuthError>(
    (values) => {
      return axios.post('/signup', values);
    },
    {
      onSuccess: (...args) => {
        console.log('success creating account');
        router.push('/login');
        props?.onSuccess && props?.onSuccess(...args);
      },
      ...props,
    }
  );
}


