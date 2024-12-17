'use client';
import Image from 'next/image';
import React from 'react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BigCardProps } from '@/lib/interfaces';

const BigCard = ({
  textDisplayClassName,
  img,
  imgTitle,
  frameCount,
  frameWidth,
  frameHeight,
  cardTitle,
  linkText,
  linkUrl,
  cardText,
  price,
}: BigCardProps) => {
  const frames = () => {
    const count = frameCount ? frameCount : 26;
    const frames = [];
    for (let i = 0; i < count; i++) {
      frames.push(
        <div
          key={i}
          className={`absolute bottom-0 z-10 ${frameHeight ? `h-${frameHeight}` : 'h-52'} ${
            frameWidth ? `w-${frameWidth}` : 'w-12'
          } glass`}
          style={{ left: `${i * 30}px` }}
        />,
      );
    }
    return frames;
  };
  return (
    <div className="relative  w-full h-[400px] sm:h-[570px]  overflow-hidden rounded-2xl">
      <Image
        src={img ? img : '/barn.png'}
        alt={imgTitle ? imgTitle : 'barn'}
        layout="fill"
        className="rounded-2xl object-cover"
      />
      <div className="flex w-full ">{frames()}</div>
      <div
        className={cn(
          'absolute z-30 bottom-0 left-0 text-white  w-full h-52 pl-6 pt-10 pr-14 ',
          textDisplayClassName,
        )}
      >
        <div className="text-xl md:text-3xl font-semibold max-w-[515px] line-clamp-4">
          {cardTitle}
        </div>
        <div className="mt-3 flex flex-col gap-2 md:flex-row justify-between items-center">
          <p className="max-w-[383px] text-lg font-normal line-clamp-1 md:line-clamp-none ">
            {cardText}
          </p>
          <Link
            href={linkUrl ? linkUrl : '/'}
            className={`${linkText ? buttonVariants({ variant: 'default' }) : 'hidden'} `}
          >
            {linkText} <ArrowRight size={14} />
          </Link>
        </div>
        <p className={`${price ? 'font-bold text-3xl mt-3' : 'hidden'} `}>€ {price}/dan</p>
      </div>
    </div>
  );
};

export default BigCard;
