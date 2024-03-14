import Image from 'next/image';
import { CardContainer } from './ui/3d-card';
export function ImageGrid() {
  return (
    <div className="grid items-center  grid-cols-4 grid-rows-2 gap-4  w-full">
      <div className="col-span-2 relative w-full  max-w-[664px] h-[227px] rounded-2xl overflow-hidden">
        <Image src="/imgGrid1.png" alt="imgGrid1" fill className="object-cover" />
      </div>
      <div className="col-start-3 relative w-full  max-w-[320px] h-[227px] rounded-2xl overflow-hidden">
        <Image src="/imgGrid2.png" alt="imgGrid2" fill className="object-cover" />
      </div>
      <div className="col-start-4 relative w-full  max-w-[320px] h-[227px] rounded-2xl overflow-hidden">
        <Image src="/imgGrid3.png" alt="imgGrid3" fill className="object-cover" />
      </div>
      <div className="row-start-2 relative w-full  max-w-[320px] h-[227px] rounded-2xl overflow-hidden">
        <Image src="/imgGrid4.png" alt="imgGrid4" fill className="object-cover" />
      </div>
      <div className="col-span-2 row-start-2 relative w-full  max-w-[664px] h-[227px] rounded-2xl overflow-hidden">
        <Image src="/imgGrid5.png" alt="imgGrid5" fill className="object-cover" />
      </div>
      <div className="col-start-4 row-start-2 relative w-full  max-w-[320px] h-[227px] rounded-2xl overflow-hidden">
        <Image src="/imgGrid6.png" alt="imgGrid6" fill className="object-cover" />
      </div>
    </div>
  );
}
