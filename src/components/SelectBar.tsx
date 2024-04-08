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
import { useRouter, useSearchParams } from 'next/navigation';

interface SelectBarProps {
  tools: {
    name: string;
    items: SmallCardProps[];
  }[];
}

export function SelectBar({ tools }: SelectBarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategorySelect = (category: string) => {
    if (category === 'all') {
      router.push('/tools');
    } else {
      router.push(`/tools?category=${category}`);
    }
  };

  const searchCategory = searchParams.get('category');
  return (
    <Select onValueChange={handleCategorySelect} value={searchCategory || ''}>
      <SelectTrigger className="w-[205px] focus:ring-0 focus:ring-offset-0 bg-white">
        <SelectValue placeholder="Kategorije" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <SelectItem value="all" key="all">
            Sve kategorije
          </SelectItem>
          <Each
            of={tools}
            render={(item) => (
              <SelectItem key={item.name} value={item.name}>
                {item.name}
              </SelectItem>
            )}
          />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
