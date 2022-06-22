import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const BulkPayment: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Airlines and Hotels" />
      <AppLayout>Bulk Payment</AppLayout>
    </>
  );
};

export default BulkPayment;
