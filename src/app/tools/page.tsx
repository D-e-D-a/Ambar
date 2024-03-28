import AllTools from '@/components/AllTools';
import SearchBar from '@/components/SearchBar';
import { SelectBar } from '@/components/SelectBar';
import { SmallCardProps } from '@/lib/interfaces';
import { Suspense } from 'react';
import {fetchNews,fetchCategories} from "starko-blog"



export default async function page() {
 
  const data = await fetchNews({
    lang: "sr-Latn-ME",
  });
  const categories = await fetchCategories()
  // console.log("🚀 ~ page ~ categories:", categories)

  console.log("🚀 ~ page ~ data:", data)
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <main className=" overflow-hidden space-y-8 mt-11">
        <div className="text-secondary max-w-[490px]">
          <h2 className="text-xl md:text-3xl  font-semibold">Rentiraj sve potrebne alate</h2>
          <p className="text-base">
            ambar omogucava rentiranje razlicitih vrsta alata, rentiranje je namjenjeno za
            kratkorocnu upotrebu
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <SelectBar tools={data?.blogs} />
          <SearchBar className="h-10 rounded-lg lg:max-w-[837px]" />
          <p className="text-secondary-foreground text-base font-normal">
            Trenutno dostupno 200 alata
          </p>
        </div>

        <AllTools cards={data?.blogs} />
      </main>
    </Suspense>
  );
}
