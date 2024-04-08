'use client';
import React, { useState } from 'react';
import { SelectBar } from './SelectBar';
import SearchBar from './SearchBar';
import AllTools from './AllTools';

const ToolSearchAndDisplay = ({ data, categories }: { data: any; categories: any }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (searchQuery: string) => {
    setSearch(searchQuery);
  };
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <SelectBar tools={categories} />
        <SearchBar className="h-10 rounded-lg lg:max-w-[837px]" onSearch={handleSearch} />
        <p className="text-secondary-foreground text-base font-normal">
          Trenutno dostupno {data?.count} alata
        </p>
      </div>
      <AllTools cards={data?.blogs} search={search} />
    </>
  );
};

export default ToolSearchAndDisplay;
