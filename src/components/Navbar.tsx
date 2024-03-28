'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Each } from './Each';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const navigation = [
    { name: 'Alati', href: '/tools' },
    { name: 'O nama', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kreativni hub', href: '/hub' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between gap-6 w-full pt-4 ">
      <SearchBar />
      {/* Desktop navigation */}
      <Each
        className="hidden md:flex gap-6 "
        of={navigation}
        render={(item) => (
          <Link href={item.href} className="text-sm whitespace-nowrap">
            {item.name}
          </Link>
        )}
      />
      <MenuIcon
        className="md:hidden cursor-pointer active:scale-90 "
        onClick={() => setOpen(!open)}
      />
      {/* Mobile menu */}
      <div
        className={` fixed top-0 left-0 bg-background z-50 h-full w-[100%] transition-all ease-in-out duration-300 overflow-hidden flex items-center pl-10 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-[-100%] '
        }`}
      >
        <X
          className="absolute top-8 right-4 cursor-pointer h-10 w-10 active:scale-90 "
          onClick={() => setOpen(!open)}
        />
        <Each
          className="flex flex-col gap-6 text-2xl font-bold text-primary"
          of={navigation}
          render={(item) => <Link href={item.href} onClick={() => setOpen(!open)}>{item.name}</Link>}
        />
      </div>
    </div>
  );
};

export default Navbar;
