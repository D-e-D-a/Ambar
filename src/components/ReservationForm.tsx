'use client';
import { useState } from 'react';
import DatePicker from '@/components/DatePicker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { sendEmail } from '@/lib/emailServices';
import { formattedDate } from '@/lib/utils';
import { Spinner } from './icons';

export default function ReservationForm({toolName}: {toolName: string}) {
  const [successMessage, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined | number>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [specialMessage, setSpecialMessage] = useState<string | undefined>(undefined);



  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
   setLoading(true);
    let message = `Ime alata: ${toolName}\nDatum od: ${formattedDate(dateFrom)}\nDatum do: ${formattedDate(dateTo)}\nKontakt telefon: ${phoneNumber}\nEmail: ${email}\nPoruka: ${specialMessage}`;

    let result = await sendEmail(message);
    setSuccess(true);
    toast('Uspješno ste rezervisali termin');
    console.log(result);
  }

  return (
    <>
      {successMessage ? (
        <div className="flex flex-col gap-4 w-full p-4 lg:max-w-xl flex-grow">
          <h2 className="text-xl md:text-2xl text-textPrimary-dark font-bold primary-font text-[#3E3E3E]">
            Hvala na poruci
          </h2>
          <p className="line-clamp-2 text-[#909090] text-xs md:text-sm text-textPrimary-gray-light secondary-font mt-2 lg:max-w-lg">
            Odgovorićemo vam u najkraćem roku
          </p>
        </div>
      ) : (
        <form
          className="flex flex-col gap-4 w-full mx-auto max-w-[556px] lg:max-w-none "
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4 justify-center">
            <DatePicker placeholder="Datum od" date={dateFrom} setDate={setDateFrom} />
            <DatePicker placeholder="Datum do" date={dateTo} setDate={setDateTo} />
          </div>
          <div className="flex gap-4 justify-center">
            <Input
              required
              type='tel'
              className="max-w-[280px] w-full"
              placeholder="Kontakt telefon"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              required
              className="max-w-[280px] w-full"
              placeholder="Kontakt email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Poseban zahtjev/poruka"
            onChange={(e) => setSpecialMessage(e.target.value)}
          />
          <Button
            className="w-full"
            type="submit"
          >
           {
             loading ? <Spinner className='animate-spin w-5 h-5'  /> : 'Rezerviši'  
           }
          </Button>
        </form>
      )}
    </>
  );
}
