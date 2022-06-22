import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const PowerUtility: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Internet Subscription" />
      <AppLayout>Power Utility</AppLayout>
    </>
  );
};

export default PowerUtility;
