import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <main className="w-full flex flex-col p-6 text-gray-800 rounded-lg space-y-6 text-left md:text-justify ">
      <h1 className="text-3xl md:text-5xl text-balance font-semibold text-secondary text-left mb-5 lg:mb-0 ">
        O nama
      </h1>
      <p>
        Ambar Studio je kreativni hab i socijalno preduzeće koje spaja umjetnost, zanatstvo i
        održivost, stvarajući prostor gdje ideje oživljavaju, a resursi dobijaju novi život.
      </p>
      <p>
        Kreativnost je pokretač pozitivnih promjena u društvu, naročito kada je usmjerena ka
        odgovornom korišćenju materijala i osnaživanju lokalne zajednice.
      </p>
      <p>
        Naš cilj je da inspirišemo pojedince/ke, kreativce/ke i preduzetnike/ce da stvaraju sa
        svrhom i doprinesu izgradnji održivijeg i svjesnijeg društva. U Ambar Studiju svaki komad
        otpada postaje prilika, a svaka ideja dobija podršku kroz niz usluga:
      </p>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>Iznajmljivanje alata:</strong> Pružamo vam priliku da uz minimalne troškove
          ostvarite svoje projekte uz profesionalnu opremu dostupnu svima. Uz par klikova možete
          iznajmiti potrebni alat.
        </li>
        <li>
          <strong>Radionice šivenja od recikliranih materijala:</strong> Učimo vas kako da od starog
          tekstila napravite nove, unikatne komade, smanjujući tekstilni otpad i promovišući
          cirkularnu ekonomiju.
        </li>
        <li>
          <strong>Restauraciju namještaja:</strong> Vraćamo stari namještaj u život, kombinujući
          tradicionalne zanatske tehnike sa modernim dizajnom.
        </li>
        <li>
          <strong>Izradu proizvoda i promotivnog materijala:</strong> Kroz kreativne procese
          pretvaramo reciklirane materijale u korisne i estetski privlačne proizvode za različite
          potrebe.
        </li>
        <li>
          <strong>Iznajmljivanje prostora i opreme za rad:</strong> Ukoliko nemaš svoj prostor za
          šivenje ili neki drugi vid kreative, mjesto i mašine za šivenje ili drugi alat možete
          rezervisati kod nas.
        </li>
      </ul>
      <p className="italic">
        U Ambar Studiju težimo da postanemo središte inovacija, učenja i saradnje, gdje svaki član
        zajednice može pronaći inspiraciju, alat i podršku da svoje ideje pretvori u djela koja
        imaju pozitivan uticaj na okoliš i društvo.
      </p>
    </main>
  );
}
