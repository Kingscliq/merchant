// import TextField from '@components/Inputs/TextField';
import AppLayout from '@/layout';
import SideNav from '@/widgets/Sidenav';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const Betting: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Betting & Lottery" />
      <AppLayout>Betting and Lottery</AppLayout>
    </>
  );
};

export default Betting;
