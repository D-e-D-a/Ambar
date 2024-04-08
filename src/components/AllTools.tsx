'use client';
import React from 'react';
import { Each } from './Each';
import { SmallCardProps } from '@/lib/interfaces';
import { useSearchParams } from 'next/navigation';
import SmallCard from './SmallCard';

interface AllToolsProps {
  cards: SmallCardProps[];
  search?: string;
}

const AllTools = ({ cards, search }: AllToolsProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const searchQuery = searchParams.get('q');

  // Filter cards based on category and search query
  let filteredCards = cards;
  if (category) {
    filteredCards = filteredCards.filter((card) => card.categoryname === category);
  }
  if (searchQuery) {
    filteredCards = filteredCards.filter(
      (card) => card.title && card.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  if (search) {
    filteredCards = filteredCards.filter(
      (card) => card.title && card.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <div className="flex flex-col gap-5 ">
      {filteredCards.length > 0 ? (
        <Each
          className={`flex flex-wrap gap-5 justify-center md:justify-between items-center `}
          of={filteredCards}
          render={(item) => <SmallCard {...item} link={`tools/${item.slug}&id=${item._id} `} />}
        />
      ) : (
        <h3 className="text-center text-xl">Trenutno nemamo u ponudi alate iz ove kategorije</h3>
      )}
    </div>
  );
};

export default AllTools;
