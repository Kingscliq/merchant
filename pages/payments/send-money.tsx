import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const SendMoney: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Internet Subscription" />
      <AppLayout>Send Money </AppLayout>
    </>
  );
};

export default SendMoney;
