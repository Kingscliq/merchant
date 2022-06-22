import React from 'react';
import Link from '@mui/material/Typography';
// import type LinkProps from '@mui/material/Typography';
import NextLink from 'next/link';
import type { LinkProps as MUILinkProps } from '@mui/material';

type LinkProps = MUILinkProps & {
  to: string;
};
export default function Index({ to, sx, children, ...otherProps }: LinkProps) {
  return (
    <NextLink href={to}>
      <Link
        color="primary"
        sx={{
          '&:hover': { color: 'secondary' },
          fontSize: '14px',
          px: '4px',
          ...sx,
        }}
        {...otherProps}
      >
        {children}
      </Link>
    </NextLink>
  );
}
