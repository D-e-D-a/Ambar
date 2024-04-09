import BigCard from '@/components/BigCard';
import SmallCard from '@/components/SmallCard';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ImageGrid } from '@/components/ImageGrid';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SearchBar from '@/components/SearchBar';
import { fetchNews } from 'starko-blog';
import { Each } from '@/components/Each';
import { SmallCardProps } from '@/lib/interfaces';

export default async function Home() {
  const data = await fetchNews({
    lang: 'sr-Latn-ME',
    simpleMode: 'true',
    limit: 4,
  });
  console.log("🚀 ~ Home ~ data:", data)
  return (
    <main className=" overflow-hidden space-y-8">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
        <section className="w-full  lg:w-1/2 ">
          <div className="relative w-full h-[500px] md:h-[800px] ">
            <Image src="/logo2.svg" alt="Ambar Logo" layout="fill" className="dark:invert" />
            <div className="absolute top-[20%] sm:top-1/3  w-full z-10">
              <p className="font-normal text-sm text-secondary-foreground border border-input rounded-full w-fit h-fit px-3 md:h-7 flex items-center  gap-2 mb-5">
                Potreban ti je prostor? Kreativni hub je
                <Link
                  href="/hub"
                  className={`${buttonVariants({ variant: 'link' })}"flex items-center "`}
                >
                  ovdje
                  <ArrowRight className="ml-1" size={14} />
                </Link>
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold text-secondary text-left mb-5 lg:mb-0 lg:leading-[65px]">
                Ne kupuj <br /> Rentiraj alat
              </h1>
              <p className="text-secondary text-lg max-w-[400px] mb-7">
                Ambar studio omogucava prstupacno rentiranje skupocjenih alata na teritoriji CG
              </p>
              <Link
                className={`${buttonVariants({ variant: 'default' })} font-medium text-sm`}
                href="/tools"
              >
                Pregledaj sve alate <ArrowRight className="ml-1" size={14} />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full max-w-[772px]">
          <BigCard
            cardTitle="Osim rentiranja alata mozes postati dio Kreativnog huba"
            cardText="Ambar studio omogucava rentiranje svih vrsta alata na period koji vama odgovara"
            linkText="Posjeti hub "
            linkUrl="/hub"
            textDisplayClassName="pt-2 "
          />
        </section>
      </div>

      {/* Popular tools */}

      <div>
        <h2 className="text-xl md:text-3xl font-semibold text-secondary text-left mb-5">
          Popularno
        </h2>
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between w-full ">
          <p className="text-secondary max-w-96">
            Popularni alati za potrebe bilo kojeg domacinstva
          </p>
          <Link
            href="/tools"
            className={`${buttonVariants({ variant: 'link' })}"flex items-center pl-0 md:pl-2"`}
          >
            Pregledaj sve alate <ArrowRight className="ml-1" size={14} />
          </Link>
        </div>
        <div className="mt-8 hidden md:flex gap-4 justify-center lg:justify-between  flex-wrap">
          <Each
            className={`flex flex-wrap gap-5 justify-center md:justify-between items-center `}
            of={data?.blogs}
            render={(item:SmallCardProps) => <SmallCard {...item} link={`tools/${item.slug}&id=${item._id} `} />}
          />
        </div>
        <div className="mt-8 md:hidden">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent className=" mx-auto">
              <CarouselItem className="sm:basis-2/3">
                <h3>gi</h3>
                <Each
                  className={`flex flex-wrap gap-5 justify-center md:justify-between items-center `}
                  of={data?.blogs}
                  render={(item:SmallCardProps) => (
                    <SmallCard {...item} link={`tools/${item.slug}&id=${item._id} `} />
                  )}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-0" />
            <CarouselNext className="absolute right-0" />
          </Carousel>
        </div>
      </div>

      {/* Find the right tools */}
      <div className="flex flex-col items-center pt-10 justify-center ">
        <h2 className="text-3xl md:text-5xl font-semibold text-secondary">
          Pronadji ono sto ti treba
        </h2>
        <SearchBar className="my-10 lg:max-w-[770px] h-12" globalSearch />
        <ImageGrid />
        <p className="text-secondary text-base mt-5">
          Prilikom rentiranja bilo kojeg alata potpisujete ugovor o odgovornosti
        </p>
      </div>
    </main>
  );
}
