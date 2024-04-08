'use client';
import { useState } from 'react';
import DatePicker from '@/components/DatePicker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ReservationForm() {
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined | number>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleReservationForm = () => {
    console.log(dateFrom, dateTo, phoneNumber, email, message);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <DatePicker placeholder="Datum od" date={dateFrom} setDate={setDateFrom} />
        <DatePicker placeholder="Datum do" date={dateTo} setDate={setDateTo} />
      </div>
      <div className="flex gap-4">
        <Input placeholder="Kontakt telefon" onChange={(e) => setPhoneNumber(e.target.value)} />
        <Input placeholder="Kontakt email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <Textarea placeholder="Poseban zahtjev/poruka" onChange={(e) => setMessage(e.target.value)} />
      <Button
        className="w-full"
        onClick={() => {
          handleReservationForm();
          toast('Uspješno ste rezervisali termin');
        }}
      >
        Rezerviši
      </Button>
    </div>
  );
}
