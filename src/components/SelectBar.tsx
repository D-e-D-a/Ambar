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
    category: string;
    items: SmallCardProps[];
  }[];
}

export function SelectBar({ tools }: SelectBarProps) {
  const [value, setValue] = useState('');
  // const router = useRouter();

  // useEffect(() => {
  //   router.push(`?category=${value}`);
  // }, [router, value]);
  const searchParams = useSearchParams();
  const router = useRouter();

  // const handleCategorySelect = (category: string) => {
  //   router.push(`?category=${category}`);
  // };
  return (
    <Select >
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
  );
}
