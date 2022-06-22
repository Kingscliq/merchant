import Image from 'next/image';
import React, { ReactNode } from 'react';

import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import SidebarMenuItem from '@components/SidebarMenuItem';
import {
  airtime,
  airtimeActive,
  allPaymentsActive,
  allPaymentsBase,
  apiServicesActive,
  apiServicesBase,
  bettingActive,
  bettingBase,
  bulkPaymentActive,
  bulkPaymentBase,
  cableTVActive,
  cableTVBase,
  cardsActive,
  cardsBase,
  commissionActive,
  commissionBase,
  creditActive,
  creditBase,
  dashboardActive,
  dashboardBase,
  dispenseErrorActive,
  dispenseErrorBase,
  examsubActive,
  examsubBase,
  governmentActive,
  governmentBase,
  helpSupportActive,
  helpSupportBase,
  insuranceActive,
  insuranceBase,
  internetActive,
  internetBase,
  loanActive,
  loanBase,
  powerUtilityActive,
  powerUtilityBase,
  profileActive,
  profileBase,
  subAccountActive,
  subAccountBase,
  transactionsActive,
  transactionsBase,
  transferActive,
  transferBase,
  walletActive,
  walletBase,
} from '@/public/assets/icons';

interface SidebarMenuProps {}
const SideNav: React.FC<SidebarMenuProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const SideBarHeader: React.FC<{ title: ReactNode }> = ({ title }) => {
    return (
      <h4 className="mb-8 text-left text-primary text-base mt-6 font-bolder uppercase">
        {title}
      </h4>
    );
  };

  return (
    <>
      <section className="px-10 pt-3 pb-8 w-[22rem] lg:w-[350px] h-full z-50 shadow-md overflow-scroll">
        <aside>
          <div className="mb-16 flex items-center justify-between"></div>
          <>
            <SideBarHeader title="Dashboard" />

            <SidebarMenuItem
              baseIcon={dashboardBase}
              activeIcon={dashboardActive}
              title="Overview"
              url="/dashboard"
              active={router.pathname === '/dashboard'}
              //   onClick={() => setMobileSideNav(false)}
            />
            <SideBarHeader title="Transactions" />

            <SidebarMenuItem
              baseIcon={transactionsBase}
              activeIcon={transactionsActive}
              title="Transactions"
              url="/transactions"
              active={router.pathname === '/transactions'}
              //   onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={walletBase}
              activeIcon={walletActive}
              title="Balance"
              url="/transactions/balance"
              active={router.pathname === '/transactions/balance'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={commissionBase}
              activeIcon={commissionActive}
              title="Commission"
              url="/transactions/commissions"
              active={router.pathname === '/transactions/commissions'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SideBarHeader title="Payments" />
            <SidebarMenuItem
              baseIcon={allPaymentsBase}
              activeIcon={allPaymentsActive}
              title="All Payments"
              url="/payments"
              active={router.pathname === '/payments'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={transferBase}
              activeIcon={transferActive}
              title="Send Money"
              url="/payments/send-money"
              active={router.pathname === '/payments/send-money'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={creditBase}
              activeIcon={creditActive}
              title="Recieve Money"
              url="/payments/recieve-money"
              active={router.pathname === '/payments/recieve-money'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={airtime}
              activeIcon={airtimeActive}
              title="Airtime"
              url="/payments/airtime"
              active={router.pathname === '/payments/airtime'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={internetBase}
              activeIcon={internetActive}
              title="Internet Subscription"
              url="/payments/internet-subscription"
              active={router.pathname === '/payments/internet-subscription'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={cableTVBase}
              activeIcon={cableTVActive}
              title="Cable TV"
              url="/payments/cable-tv"
              active={router.pathname === '/payments/cable-tv'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={powerUtilityBase}
              activeIcon={powerUtilityActive}
              title="Power Utility"
              url="/payments/power-utility"
              active={router.pathname === '/payments/power-utility'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={bettingBase}
              activeIcon={bettingActive}
              title="Betting & Lottery"
              url="/payments/betting-lottery"
              active={router.pathname === '/payments/betting-lottery'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={examsubBase}
              activeIcon={examsubActive}
              title="Exams"
              url="/payments/exams"
              active={router.pathname === '/payments/exams'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={governmentBase}
              activeIcon={governmentActive}
              title="Goverment"
              url="/payments/government"
              active={router.pathname === '/payments/government'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={bulkPaymentBase}
              activeIcon={bulkPaymentActive}
              title="Bulk Payments"
              url="/payments/bulk-payments"
              active={router.pathname === '/payments/bulk-payments'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SideBarHeader title="Services" />

            <SidebarMenuItem
              baseIcon={loanBase}
              activeIcon={loanActive}
              title="Loans"
              url="/services/loans"
              active={router.pathname === '/services/loans'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={insuranceBase}
              activeIcon={insuranceActive}
              title="Insurance"
              url="/services/insurance"
              active={router.pathname === '/services/insurance'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={apiServicesBase}
              activeIcon={apiServicesActive}
              title="API Services"
              url="/services/api-services"
              active={router.pathname === '/services/api-services'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={apiServicesBase}
              activeIcon={apiServicesActive}
              title="POS Terminals"
              url="/services/pos-terminals"
              active={router.pathname === '/services/pos-terminals'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SidebarMenuItem
              baseIcon={cardsBase}
              activeIcon={cardsActive}
              title="Cards"
              url="/services/cards"
              active={router.pathname === '/services/cards'}
              // onClick={() => setMobileSideNav(false)}
            />

            <SideBarHeader title="Settings" />

            <SidebarMenuItem
              baseIcon={profileBase}
              activeIcon={profileActive}
              title="Profile"
              url="/settings/profile"
              active={router.pathname === '/settings/profile'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={subAccountBase}
              activeIcon={subAccountActive}
              title="Sub Accounts"
              url="/settings/sub-accounts"
              active={router.pathname === '/settings/sub-accounts'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={dispenseErrorBase}
              activeIcon={dispenseErrorActive}
              title="Dispense Errors"
              url="/settings/dispense-error"
              active={router.pathname === '/settings/dispense-error'}
              // onClick={() => setMobileSideNav(false)}
            />
            <SidebarMenuItem
              baseIcon={helpSupportBase}
              activeIcon={helpSupportActive}
              title="Help & Support"
              url="/settings/help-support"
              active={router.pathname === '/settings/help-support'}
              // onClick={() => setMobileSideNav(false)}
            />
          </>
        </aside>
      </section>
    </>
  );
};

export default SideNav;
