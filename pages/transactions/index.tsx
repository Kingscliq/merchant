import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const AllTransactions: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | All Transactions" />
      <AppLayout>All Transactions</AppLayout>
    </>
  );
};

export default AllTransactions;
