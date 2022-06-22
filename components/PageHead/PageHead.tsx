import Head from 'next/head';
import React from 'react';

interface PageHeadProps {
  title: string;
  description?: string;
  name?: string;
}
const PageHead: React.FC<PageHeadProps> = ({ title, description, name }) => {
  return (
    <Head>
      <title>{title || 'GateForce | Merchant Portal'}</title>
      <meta
        name={name || 'GateForce | Merchant Portal'}
        content={
          description ||
          'Merchant Portal a place where agents and merchants manage their services'
        }
      />
    </Head>
  );
};

export default PageHead;
