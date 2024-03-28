import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-grow items-center justify-center ">
  <div className="rounded-lg bg-white p-8 text-center shadow-xl">
    <h1 className="mb-4 text-4xl font-bold">404</h1>
    <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
    <Link href="/" className={buttonVariants({ variant: 'destructive' })}> Go back to Home </Link>
  </div>
</div>
  );
}
