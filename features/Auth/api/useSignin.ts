import { axios as client } from '@/lib/axios';
import axios from 'axios';
import type { User, AuthError } from '@/types';
import type { UseMutationOptions } from 'react-query';
import type { FormikValues } from 'formik';
import { useAppSelector, selectLoading } from '@/store';

import { useMutation } from 'react-query';

export interface SigninValues extends FormikValues {
  userName: string;
  password: string;
}

export function useSignin(
  props?: UseMutationOptions<User | any, AuthError, SigninValues>
) {
  console.log(`useSignin props value: ${JSON.stringify(props)}`);
  return useMutation<User, AuthError, SigninValues>(
    (values: SigninValues) => {
      return axios.post('https://gateforce-identity-dev.azurewebsites.net/api/v2/mobile/agent/login', values);
    },
    {
      onSuccess: (...args) => {
        // TODO: invalidate the request here.
        props?.onSuccess && props?.onSuccess(...args);
      },
      ...props,
    }
  );
}


