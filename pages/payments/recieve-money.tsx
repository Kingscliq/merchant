import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const RecieveMoney: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Receive Utility" />
      <AppLayout>Recieve Money</AppLayout>
    </>
  );
};

export default RecieveMoney;