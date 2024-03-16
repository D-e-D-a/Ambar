'use client';

import { Each } from './Each';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SmallCardProps } from '@/lib/interfaces';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

interface SelectBarProps {
  tools: {
    category: string;
    items: SmallCardProps[];
  }[];
}

export function SelectBar({ tools }: SelectBarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategorySelect = (category: string) => {
    router.push(`?category=${category}`);
  };
  const searchCategory = searchParams.get('category');
  return (
    <Suspense fallback={<div className='text-center'>Loading...</div>}>
    <Select onValueChange={handleCategorySelect} value={searchCategory || ''}>
      <SelectTrigger className="w-[205px] focus:ring-0 focus:ring-offset-0 bg-white">
        <SelectValue placeholder="Kategorije" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <SelectLabel>Kategorije</SelectLabel>
          <Each
            of={tools}
            render={(item) => (
              <SelectItem key={item.category} value={item.category}>
                {item.category}
              </SelectItem>
            )}
          />
        </SelectGroup>
      </SelectContent>
    </Select>
    </Suspense>
  );
}
