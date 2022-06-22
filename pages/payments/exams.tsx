import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const Exams: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Exams" />
      <AppLayout>Exams</AppLayout>
    </>
  );
};

export default Exams;
