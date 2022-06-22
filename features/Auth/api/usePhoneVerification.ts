import { useMutation } from 'react-query';
import type { FormikValues } from 'formik';
// import { useFormikContext } from 'formik';
import type { UseMutationOptions } from 'react-query';

import { axios, axios2 } from '@/lib/axios';
import { useAppDispatch } from '@store/hooks';
import type { Loading, AuthError, VerifyPhone } from '@/types/index';
import { toggleLoading } from '@features/Counter/Loading.store';

export interface VerifyPhoneNumber extends FormikValues {
  identifier: string;
  // phone_number: number;
  otp?: number;
}

export const verifyPhone = (
  props?: UseMutationOptions<VerifyPhoneNumber | any, AuthError, VerifyPhone>
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation<VerifyPhoneNumber | any, AuthError, VerifyPhone>(
    (values: Partial<VerifyPhoneNumber>) => {
      return axios2.get(`/VerifyPhone?phone=${values}`);
    },
    {
      onSuccess: (...args) => {
        // TODO: invalidate the request here.
        props?.onSuccess && props?.onSuccess(...args);
        console.log(...args);
        // console.log(JSON.stringify(...args.data));
      },
      onError: (err, values: VerifyPhoneNumber, ...rest) => {
        // TODO: handle the error
        props?.onError && props?.onError(err, values, ...rest);
        console.error(err.message);
        return;
      },
      ...props,
    }
  );
};

export interface VerifyUser extends FormikValues {
  Identifier: string;
  Password: string;
  ConfirmPassword: string;
}

export const createUser = (
  props?: UseMutationOptions<VerifyUser | any, AuthError>
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation<VerifyUser | any, AuthError>(
    (values: VerifyUser) => {
      return axios2.post('/usernamesetup', values);
    },
    {
      onSuccess: (...args) => {
        // TODO: invalidate the request here.
        props?.onSuccess && props?.onSuccess(...args);
        console.log(...args);
      },
      onError: (err, values: VerifyUser, ...rest) => {
        // TODO: handle the error
        props?.onError && props?.onError(err, values, ...rest);
        console.error(err.message);
        return;
      },
      ...props,
    }
  );
};

export const registerUser = (
  props?: UseMutationOptions<VerifyUser | any, AuthError>
) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation<VerifyUser | any, AuthError>(
    (values: VerifyUser) => {
      return axios2.post('/register', values);
    },
    {
      onSuccess: (...args) => {
        // TODO: invalidate the request here.
        props?.onSuccess && props?.onSuccess(...args);
        console.log(...args);
      },
      onError: (err, values: VerifyUser, ...rest) => {
        // TODO: handle the error
        props?.onError && props?.onError(err, values, ...rest);
        console.error(err.message);
        return;
      },
      ...props,
    }
  );
};

export const verifyOtp = (
  props?: UseMutationOptions<VerifyPhoneNumber | any, AuthError, VerifyPhone>
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation<VerifyPhoneNumber | any, AuthError>(
    (values: Partial<VerifyPhoneNumber>) => {
      return axios2.post('/ValidateUserOtp', values);
    },
    {
      onSuccess: (...args) => {
        // TODO: invalidate the request here.
        props?.onSuccess && props?.onSuccess(...args);
        console.log(...args);
      },
      onError: (err, values: VerifyPhoneNumber, ...rest) => {
        // TODO: handle the error
        props?.onError && props?.onError(err, values, ...rest);
        console.error(err.message);
        return;
      },
      ...props,
    }
  );
};

interface VerifyBvn {
  bvn: number;
}

export const verifyBvn = (
  props?: UseMutationOptions<VerifyBvn | any, AuthError>
) => {
  return useMutation<VerifyBvn | any, AuthError>(
    (values: VerifyBvn) => {
      return axios.get(`/VerifyBVN?bvn=${values}`);
    },
    {
      onSuccess: (...args) => {
        // TODO: invalidate the request here.
        props?.onSuccess && props?.onSuccess(...args);
        console.log(...args);
      },
      onError: (err, values: VerifyBvn, ...rest): void => {
        // TODO: handle the error
        props?.onError && props?.onError(err, values, ...rest);
        console.error(err.message);
        return;
      },
    }
  );
};
