'use client';
import BigCard from '@/components/BigCard';
import ReservationForm from '@/components/ReservationForm';
import React from 'react';

const page = ({ params }: { params: any }) => {
  console.log('🚀 ~ page ~ params:', params);

  return (
    <div className="flex justify-between w-full gap-14">
      <BigCard
        img="/busilica.png"
        cardTitle="TurboDrive Impact Wrench"
        price={200}
        frameCount={35}
      />
      <div className="max-w-[510px] flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl font-semibold">Rucna Busilica 24 mm</h1>
        <p>
          ambar omogucava rentiranje razlicitih vrsta alata, rentiranje je namjenjeno za kratkorocnu
          upotrebu ambar omogucava rentiranje razlicitih vrsta alata, rentiranje je namjenjeno za
          kratkorocnu upotrebu ambar omogucava rentiranje razlicitih vrsta alata, rentiranje je
          namjenjeno za kratkorocnu omogucava rentiranje razlicitih vrsta alata, rentiranje je
          namjenjeno za kratkorocnu upotrebu
        </p>
        <p>
          ambar omogucava rentiranje razlicitih vrsta alata, rentiranje je namjenjeno za kratkorocnu
          upotrebu ambar omogucava
        </p>
        <ReservationForm />
      </div>
    </div>
  );
};

export default page;
