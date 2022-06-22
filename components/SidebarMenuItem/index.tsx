import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SideBarMenuItemProps {
  title?: string;
  url?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  activeIcon?: string | any; // any type is assigned for static image
  baseIcon?: string | any; // any type is assigned for static image
  active?: boolean;
}

const SidebarMenuItem: React.FC<SideBarMenuItemProps> = ({
  active,
  baseIcon,
  activeIcon,
  url,
  title,
  className,
  onClick,
}) => {
  return (
    <Link href={url || '/'}>
      <div
        className={[
          'flex w-full transition-all duration-500 ease-in-out items-center cursor-pointer hover:bg-gray-100 px-4 py-4 rounded-lg',
          `${active ? 'font-medium bg-nav-grey' : 'font-normal'} `,
          className,
        ].join(' ')}
        onClick={onClick}
      >
        {active ? (
          <div className={['flex items-center justify-center '].join(' ')}>
            <Image
              src={activeIcon}
              alt="Merchant Portal"
              height={20}
              width={20}
            />
          </div>
        ) : (
          <div className={['flex items-center justify-center '].join(' ')}>
            <Image
              src={baseIcon}
              alt="Merchant Portal"
              height={20}
              width={20}
            />
          </div>
        )}
        <div className="ml-6">{title}</div>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
