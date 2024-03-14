import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Footer = () => {
  return (
    <footer className="min-h-20 mt-32 text-xs font-medium flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-0 justify-between sm:items-end">
      <div className=" h-full w-40 flex relative ">
        <Image src="/logo.svg" alt="footer" width={74} height={74} className="object-cover" />
        <p className=' absolute right-3 bottom-1/4'>Ambar d.o.o</p>
      </div>
      <HoverCard>
          <HoverCardTrigger asChild>
            <Link className={buttonVariants({ variant: 'link' })} href="https://www.starko.me/">
            Built and designed by Starko LLC
            </Link>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-80 bg-black"
            style={{
              backgroundImage:
                "url('/stars.png')",
            }}
          >
            <div className="flex flex-col justify-between space-x-4 p-4 text-white rounded-lg shadow-md">
              <div className="flex items-center space-x-4 bg-transparent">
                <Avatar >
                  <AvatarImage src="https://www.starko.me/logoCore-light.svg"  />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="space-y-1 font-sans">
                  <h4 className="text-lg font-semibold">Starko</h4>
                  <p className="text-sm">We design. We build. You grow.</p>
                  <p className="text-sm">
                    Starko is a digital agency that specializes in making modern web solutions. We
                    are fast, responsive, and, most of all, timeless.
                  </p>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      
      <div className='flex gap-2'>
        <Instagram size={18.75} />
        <Facebook size={18.75}  />
        <Twitter size={18.75}  />
      </div>
    </footer>
  );
};

export default Footer;
