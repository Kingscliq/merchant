import AppLayout from '@/layout';
import PageHead from '@components/PageHead/PageHead';

import type { NextPage } from 'next';

const Profile: NextPage = () => {
  return (
    <>
      <PageHead title="GateForce Merchant Portal | Profile" />
      <AppLayout>Profile</AppLayout>
    </>
  );
};

export default Profile;
