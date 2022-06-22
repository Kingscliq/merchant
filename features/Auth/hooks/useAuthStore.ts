import { useCallback } from 'react';
import type { RootState } from '@store/types';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import type { User } from '@/types/User';
import { setUser } from '../Auth.store';

export const selectCount = (state: RootState) => state.counter;

export const useAuthActions = () => {
  const dispatch = useAppDispatch();

  return {
    setUser: useCallback((user: User) => dispatch(setUser(user)), [dispatch]),
  };
};

export const useAuth = () => {
  return useAppSelector(selectCount);
};
