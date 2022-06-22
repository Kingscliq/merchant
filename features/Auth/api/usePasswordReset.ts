import { axios } from '@/lib/axios';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import type { FormikValues } from 'formik';
import type { UseMutationOptions } from 'react-query';

import type { PasswordReset, AuthError } from '@/types';

export interface PasswordResetProps extends FormikValues {
  username: string;
}

export const usePasswordReset = (
  props?: UseMutationOptions<PasswordReset | any, AuthError, PasswordResetProps>
) => {
  const router = useRouter();
  return useMutation<PasswordReset, AuthError, PasswordResetProps>(
    (values: PasswordResetProps) => {
      return axios.post('/confirm-password-reset', values);
    },
    {
      onSuccess: (...args) => {
        props?.onSuccess && props?.onSuccess(...args);
        router.push('/login');
      },
      ...props,
    }
  );
};

export const useSendOtp = (
  props?: UseMutationOptions<PasswordReset | any, AuthError, PasswordResetProps>
) => {
  const router = useRouter();
  return useMutation<PasswordReset, AuthError, PasswordResetProps>(
    (values: PasswordResetProps) => {
      return axios.post('/password-reset-request', values);
    },
    {
      onSuccess: (...args) => {
        props?.onSuccess && props?.onSuccess(...args);
        router.push('/login');
      },
      ...props,
    }
  );
};

export const useConfirmOtp = (
  props?: UseMutationOptions<PasswordReset | any, AuthError, PasswordResetProps>
) => {
  const router = useRouter();
  return useMutation<PasswordReset, AuthError, PasswordResetProps>(
    (values: PasswordResetProps) => {
      return axios.post('/password-reset-otp-validation', values);
    },
    {
      onSuccess: (...args) => {
        props?.onSuccess && props?.onSuccess(...args);
        router.push('/login');
      },
      ...props,
    }
  );
};
