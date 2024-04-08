import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import { SmallCardProps } from '@/lib/interfaces';
import Link from 'next/link';

const SmallCard = ({
  className,
  thumbnailurl,
  summary,
  imgDescription,
  custom_field,
  title,
  link,
}: SmallCardProps) => {
  return (
    <Card
      className={cn(
        'h-full min-h-[417px] w-full max-w-[304px] bg-white py-[14px] px-3 space-y-4',
        className,
      )}
    >
      <CardHeader className="relative w-full h-[187px] rounded-xl overflow-hidden">
        <Image
          src={thumbnailurl ? thumbnailurl : '/blur.png'}
          alt={imgDescription ? imgDescription : 'no image'}
          fill
          className="object-contain"
        />
      </CardHeader>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      <CardContent className="p-0 space-y-4 ">
        <p className="line-clamp-2">
          {summary ? (
            summary
          ) : (
            <span className="text-secondary-foreground text-sm">
              Additional details not available. <span>Contact us for more info.</span>
            </span>
          )}
        </p>
        <p className="text-secondary-foreground text-sm flex items-center">
          <MapPin size={18} className="mr-1" /> {custom_field?.place} - €{custom_field?.price}/dan
        </p>
      </CardContent>
      <CardFooter className="p-0 w-full">
        <Link
          href={link ? link : '/'}
          className={`${buttonVariants({ variant: 'default' })} w-full`}
        >
          Rezervisi
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SmallCard;
