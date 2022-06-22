import { useCallback } from 'react';
import type { RootState } from '@store/types';
import { decrement, increment } from '../Counter.store';
import { useAppDispatch, useAppSelector } from '@store/hooks';

export const selectCount = (state: RootState) => state.counter;

export const useCounterActions = () => {
  const dispatch = useAppDispatch();

  return {
    increment: useCallback(() => dispatch(increment()), [dispatch]),
    decrement: useCallback(() => dispatch(decrement()), [dispatch]),
  };
};

export const useCounter = () => {
  return useAppSelector(selectCount);
};
