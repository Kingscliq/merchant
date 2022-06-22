import SideNav from '@/widgets/Sidenav';
import Topnav from '@/widgets/Topnav';
import React, { Children } from 'react';

interface AppLayoutProp {
  children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProp> = ({ children }) => {
  return (
    <section>
      <Topnav />
      <div className="flex relative">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="col-span-7">{children}</div>
      </div>
    </section>
  );
};

export default AppLayout;
