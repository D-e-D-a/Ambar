import ToolSearchAndDisplay from '@/components/ToolSearchAndDisplay';

import { Suspense } from 'react';
import { fetchNews, fetchCategories } from 'starko-blog';
export default async function page() {
  const data = await fetchNews({
    lang: 'sr-Latn-ME',
    simpleMode: 'true',
    limit: 100,
  });
  const categories = await fetchCategories();
 

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
      <ToolSearchAndDisplay data={data} categories={categories} />
      </main>
    </Suspense>
  );
}
