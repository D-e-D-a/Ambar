import DatePicker from './DatePicker';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ReservationForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <DatePicker placeholder="Datum od" />
        <DatePicker placeholder="Datum do" />
      </div>
      <div className="flex gap-4">
        <Input placeholder="Kontakt telefon" />
        <Input placeholder="Kontakt email" />
      </div>
      <Textarea placeholder="Poseban zahtjev/poruka" />
      <Button className="w-full">Rezervisi</Button>
    </div>
  );
}
