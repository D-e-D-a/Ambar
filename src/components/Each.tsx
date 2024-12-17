import { Children, ReactNode } from 'react';

interface EachProps<T> {
  of: T[] | undefined; // Handle undefined as well
  render: (item: T, index: number) => ReactNode;
  className?: string;
}

export function Each<T>({ of, render, className }: EachProps<T>): ReactNode {
  // Ensure 'of' is an array, otherwise return null or some fallback
  if (!Array.isArray(of)) {
    return <div className={className}>No data available</div>; // You can customize this fallback
  }

  return (
    <div className={className}>
      {Children.toArray(of.map((item: T, index: number) => render(item, index)))}
    </div>
  );
}
