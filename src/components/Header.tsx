import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href={'/'} className="relative w-[74px] h-[74px]">
        <Image
          src="/logo.svg"
          alt="Ambar Logo"
          layout="fill"
          objectFit="cover"
          className="dark:invert"
        />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
