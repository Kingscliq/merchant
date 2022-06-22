import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const Balance: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Balance" />
      <AppLayout>Balance</AppLayout>
    </>
  );
};

export default Balance;
