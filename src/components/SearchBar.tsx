import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between  md:max-w-[400px] lg:max-w-[560px] w-full h-8 rounded-full bg-white border border-[#c9d1db] overflow-hidden pl-3 ',
        className,
      )}
    >
      <Search className=" left-3 text-secondary-foreground " />

      <Input
        placeholder="Potrazi ono sto ti treba"
        className="hide-placeholder placeholder:text-input  text-normal bg-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-secondary"
      />
    </div>
  );
};

export default SearchBar;
