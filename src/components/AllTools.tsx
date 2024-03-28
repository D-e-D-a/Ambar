'use client';
import React from 'react';
import { Each } from './Each';
import { SmallCardProps, cardsProps } from '@/lib/interfaces';
import { useSearchParams } from 'next/navigation';
import SmallCard from './SmallCard';
import { link } from 'fs';

interface AllToolsProps {
  cards: SmallCardProps[];
}

const AllTools = ({ cards }: AllToolsProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  return (
    <Each
      className="flex flex-col gap-5 "
      of={cards}
      render={(card) =>
        card.categoryname === category ? (
          cards.length > 0 ? (
            <Each
              className="flex flex-wrap gap-5 justify-center md:justify-between items-center"
              of={cards}
              render={(item) => <SmallCard  {...item} />}
            />
          ) : (
            <h3 className='text-center'>Trenutno nemamo u ponudi alate iz ove kategorije</h3>
          )
        ) : category === null ? (
          <Each
            className="flex flex-wrap gap-5 justify-center md:justify-between items-center "
            of={cards}
            render={(item) => <SmallCard {...item } link={`tools/${item.link}&id=${item.title}`} />}
          />
        ) : null
      }
    />
  );
};

export default AllTools;
