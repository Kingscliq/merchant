import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const Commission: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Commission" />
      <AppLayout>Comissions</AppLayout>
    </>
  );
};

export default Commission;
