import BigCard from '@/components/BigCard';
import ReservationForm from '@/components/ReservationForm';
import React from 'react';
import { extractIdFromParams, extractTitleFromId } from '@/lib/utils';
import { fetchNews, fetchCategories } from 'starko-blog';

const page = async ({ params }: { params: any }) => {
  const id = extractIdFromParams(params.id);
  const title = extractTitleFromId(params.id);
  const data = await fetchNews({
    lang: 'sr-Latn-ME',
    slug: title || '',
    simpleMode: 'false',
  });

  const filteredData = data?.blogs?.filter((blog: any) => blog._id === id);

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-14">
      {filteredData && (
        <>
          <BigCard
            img={filteredData[0]?.thumbnailurl}
            cardTitle={filteredData[0]?.title}
            price={filteredData[0]?.custom_field?.price}
            frameCount={35}
          />
          <div className="w-full lg:max-w-[510px] flex flex-col items-center justify-between gap-4">
            <h1 className="text-xl md:text-3xl font-semibold">{filteredData[0]?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: filteredData[0]?.blog_content || '' }} />
            <ReservationForm toolName={filteredData[0]?.title} />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
