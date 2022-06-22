import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import type { SigninValues } from '../api';
import { useSignin } from '../api';
import type { UseMutationOptions } from 'react-query';
import type { AuthError } from '@/types';
import { useAuthActions } from './useAuthStore';
import { useDispatch } from 'react-redux';

export const useAuthSignin = (
  props?: UseMutationOptions<string, AuthError, SigninValues>
) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const { setUser } = useAuthActions();

  return useSignin({
    ...props,
    onSuccess: (user, ...rest) => {
      setUser(user?.data?.result);
      if (user?.data?.result?.is_kyc_verified) {
        router.push('/dashboard');
      } else {
        router.push('/welcome');
      }
      props?.onSuccess && props?.onSuccess(user, ...rest);
    },
    onError: (err, values: SigninValues, ...rest) => {
      // TODO: handle the error
      console.log(err)
      toast.error("There was an error signing in")
      props?.onError && props?.onError(err, values, ...rest);
    },
  });
};
