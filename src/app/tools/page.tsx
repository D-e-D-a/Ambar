import { Each } from '@/components/Each';
import SearchBar from '@/components/SearchBar';
import { SelectBar } from '@/components/SelectBar';
import SmallCard from '@/components/SmallCard';
import { SmallCardProps } from '@/lib/interfaces';

const page = () => {
  interface cardsProps {
    category: string;
    items: SmallCardProps[];
  }

  const cards: cardsProps[] = [
    {
      category: 'drills',
      items: [
        {
          id: 1,
          imgUrl: '/busilica.png',
          imgDescription: 'busilica sa dodacima za srafljenje i busenje',
          title: 'PowerMax Pro Drill',
          description: 'Rucna busilica sa dodacima za srafljenje i busenje',
          place: 'Podgorica',
          price: 200,
        },
        {
          id: 2,
          imgUrl: '/busilica.png',
          imgDescription: 'busilica sa dodacima za srafljenje i busenje',
          title: 'Pro Drill',
          description: 'Rucna busilica sa dodacima za srafljenje i busenje',
          place: 'Podgorica',
          price: 200,
        },
        {
          id: 3,
          imgUrl: '/busilica.png',
          imgDescription: 'busilica sa dodacima za srafljenje i busenje',
          title: 'Power Pro Drill',
          description: 'Rucna busilica sa dodacima za srafljenje i busenje',
          place: 'Podgorica',
          price: 200,
        },
      ],
    },
    {
      category: 'wrenches',
      items: [
        {
          id: 2,
          imgUrl: '/busilica.png',
          imgDescription: 'Rucna busilica sa dodacima za srafljenje i busenje',
          title: 'TurboDrive Impact Wrench',
          description: 'Rucna busilica sa dodacima za srafljenje i busenje',
          place: 'Podgorica',
          price: 200,
        },
        // Add more wrench items as needed
      ],
    },
    // Add more categories as needed
  ];

  return (
    <main className=" overflow-hidden space-y-8">
      <div className="text-secondary max-w-[490px]">
        <h2 className="text-xl md:text-3xl  font-semibold">Rentiraj sve potrebne alate</h2>
        <p className="text-base">
          ambar omogucava rentiranje razlicitih vrsta alata, rentiranje je namjenjeno za kratkorocnu
          upotrebu
        </p>
      </div>
      <div className="flex justify-between items-center">
        {/* <SelectBar tools={cards} /> */}
        <SearchBar className="h-10 rounded-lg lg:max-w-[837px]" />
        <p className="text-secondary-foreground text-base font-normal">
          Trenutno dostupno 200 alata
        </p>
      </div>

      <Each
        className="flex flex-col gap-5 "
        of={cards}
        render={(card) => (
          <Each
            className="flex flex-wrap gap-5 justify-between items-center"
            of={card.items}
            render={(item) => <SmallCard {...item} />}
          />
        )}
      />
    </main>
  );
};

export default page;
