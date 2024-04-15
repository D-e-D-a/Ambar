import BigCard from '@/components/BigCard';
import ReservationForm from '@/components/ReservationForm';
import React from 'react';
import { extractIdFromParams, extractTitleFromId } from '@/lib/utils';
import { fetchNews, fetchCategories } from 'starko-blog';
import type { Metadata, ResolvingMetadata } from 'next';
import { BlogProps } from '@/lib/interfaces';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};



async function fetchData(id: string, title: string) {
  try {
    const data = await fetchNews({
      lang: 'sr-Latn-ME',
      slug: title || '',
      simpleMode: 'false',
    });
    return data?.blogs?.filter((blog: BlogProps) => blog._id === id);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = extractIdFromParams(params.id);
  const title = extractTitleFromId(params.id);
  const filteredData = await fetchData(id, title);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: filteredData[0]?.title ?? 'Ambar',
    openGraph: {
      images: [filteredData[0]?.thumbnailurl ?? '/blur.png', ...previousImages],
    },
  };
}

const page = async ({ params }: { params: any }) => {
  const id = extractIdFromParams(params.id) || '1';
  const title = extractTitleFromId(params.id) || 'Default Title';
  const filteredData = await fetchData(id, title);

  return (
    <>
      {id === '1' || title === 'Default Title' ? (
        <div className="flex justify-center items-center h-screen">
          <h2 className="text-2xl font-semibold">We couldn`&apos;`t find the data you`&apos;`re looking for. Please try again later.</h2>
        </div>
      ) : (
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
      )}
    </>
  );
};


export default page;
