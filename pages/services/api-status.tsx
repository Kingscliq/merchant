import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const ApiStatus: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Internet Subscription" />
      <AppLayout>API Status</AppLayout>
    </>
  );
};

export default ApiStatus;
