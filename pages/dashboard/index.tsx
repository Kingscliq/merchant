// import TextField from '@components/Inputs/TextField';
import AppLayout from '@/layout';
import SideNav from '@/widgets/Sidenav';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const Dashboard: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Dashboard" />
      <AppLayout>Hello World</AppLayout>
    </>
  );
};

export default Dashboard;
