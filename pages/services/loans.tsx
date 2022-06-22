import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const Loans: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Loan Services" />
      <AppLayout>Loans</AppLayout>
    </>
  );
};

export default Loans;
