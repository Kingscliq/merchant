import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const DispenseError: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Internet Subscription" />
      <AppLayout>Dispense Errors</AppLayout>
    </>
  );
};

export default DispenseError;
