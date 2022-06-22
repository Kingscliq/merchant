import {
  notification,
  payforceLogo,
  supportMark,
} from '@/public/assets/cf-icons';
import SearchBar from '@components/SearchBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Topnav: React.FC<{}> = () => {
  return (
    <section className="grid grid-cols-12 justify-items-end items-center bg-primary px-10 py-4 w-full text-slate-50">
      <div className="col-span-2">
        <Link href="/dashboard" passHref>
          <Image src={payforceLogo} alt="Payforce Merchant Logo" />
        </Link>
      </div>
      <div className="col-span-5">
        <SearchBar />
      </div>
      <div className="flex items-center col-span-2">
        <div>Status</div>
        <div className="bg-success text-white rounded-3xl px-6 py-2 ml-3">
          Active
        </div>
      </div>
      <div className="col-span-2">API Documentation</div>
      <div className="flex items-center col-span-1">
        <span>
          <Image src={notification} alt="Notification Icon" />
        </span>
        <span className="ml-4">
          <Image src={supportMark} alt="Support Mark" />
        </span>
      </div>
    </section>
  );
};

export default Topnav;
