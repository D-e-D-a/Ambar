'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  className?: string;
  globalSearch?: boolean; // Determines if it's a global search or local search
  onSearch?: (searchQuery: string) => void; // Callback function for search action
}

const SearchBar: React.FC<SearchBarProps> = ({ className, globalSearch = false, onSearch }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (globalSearch) {
        // If it's a global search, call the onSearch callback
        router.push(`/tools?q=${search}`);
      } else {
        // If it's a local search, prevent default behavior and call the onSearch callback
        e.preventDefault();
        onSearch?.(search);
      }
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between  md:max-w-[400px] lg:max-w-[560px] w-full h-8 rounded-full bg-white border border-[#c9d1db] overflow-hidden pl-3 ',
        className,
      )}
    >
      <Search className="left-3 text-secondary-foreground" />

      <Input
        placeholder="Npr. Brusilica"
        className="placeholder:text-input  text-normal bg-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-secondary"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
