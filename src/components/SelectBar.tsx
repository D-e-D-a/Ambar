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
import { useEffect, useState } from 'react';

interface SelectBarProps {
  tools: {
    categoryname: string;
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
    <Select onValueChange={handleCategorySelect} value={searchCategory || ''}>
      <SelectTrigger className="w-[205px] focus:ring-0 focus:ring-offset-0 bg-white">
        <SelectValue placeholder="Kategorije" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <Each
            of={tools}
            render={(item) => (
              <SelectItem key={item.categoryname} value={item.categoryname}>
                {item.categoryname}
              </SelectItem>
            )}
          />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
