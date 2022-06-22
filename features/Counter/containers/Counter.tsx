import { Heading } from '@components/Typography';
import { Box, Typography } from '@mui/material';
import { useCounterActions, useCounter } from '../hooks';

export interface ICounterProps {}

export const Counter = (props: ICounterProps) => {
  const { count } = useCounter();
  const { increment, decrement } = useCounterActions();

  return (
    <Box>
      {/* @ts-ignore: component actually exist in Heading */}
      <Heading component="h3">Counter</Heading>
      <Typography>Count: {count}</Typography>

      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => increment()}>Increment</button>
    </Box>
  );
};
