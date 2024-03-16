'use client';
import React, { Suspense } from 'react';
import { Each } from './Each';
import { cardsProps } from '@/app/tools/page';
import { useSearchParams } from 'next/navigation';
import SmallCard from './SmallCard';

interface AllToolsProps {
  cards: cardsProps[];
}

const AllTools = ({ cards }: AllToolsProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <Each
        className="flex flex-col gap-5 "
        of={cards}
        render={(card) =>
          card.category === category ? (
            card.items.length > 0 ? (
              <Each
                className="flex flex-wrap gap-5 justify-center md:justify-between items-center"
                of={card.items}
                render={(item) => <SmallCard {...item} />}
              />
            ) : (
              <h3 className="text-center">Trenutno nemamo u ponudi alate iz ove kategorije</h3>
            )
          ) : category === null ? (
            <Each
              className="flex flex-wrap gap-5 justify-center md:justify-between items-center "
              of={card.items}
              render={(item) => <SmallCard {...item} />}
            />
          ) : null
        }
      />
    </Suspense>
  );
};

export default AllTools;
