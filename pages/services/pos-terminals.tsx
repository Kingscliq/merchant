import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const PosTerminals: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Internet Subscription" />
      <AppLayout>Pos Terminals</AppLayout>
    </>
  );
};

export default PosTerminals;
