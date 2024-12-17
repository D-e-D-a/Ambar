import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Creative Hub',
};

const Hub = () => {
  return (
    <main className="w-full flex flex-col items-center p-6 text-gray-800 rounded-lg space-y-6 text-left md:text-justify">
      <h1 className="text-3xl md:text-5xl font-semibold text-secondary text-left mb-5 lg:mb-0 w-full">
        Kreativni hub
      </h1>
      <p>U kreativnom hub-u možete:</p>
      <ul className="space-y-6">
        <li className="flex flex-col gap-4">
          <p>Raditi na vlastitim projektima uz pristup profesionalnim alatima i opremi:</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/Barn.png"
              alt="Profesionalni alati"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/Barn.png"
              alt="Profesionalni alati"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </li>
        <li className="flex flex-col gap-4">
          <p>Pridružiti se edukativnim i praktičnim radionicama:</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/Barn.png"
              alt="Radionica reciklaže"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/Barn.png"
              alt="Radionica šivenja"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </li>
        <li className="flex flex-col gap-4">
          <p>Povezati se sa zajednicom:</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/Barn.png"
              alt="Zajednica 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/Barn.png"
              alt="Zajednica 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </li>
        <li className="flex flex-col gap-4">
          <p>Organizovati team building za svoj tim:</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/Barn.png"
              alt="Team Building 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/Barn.png"
              alt="Team Building 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Hub;
