import { Children, ReactNode } from 'react';

interface EachProps<T> {
  of: T[];
  render: (item: T, index: number) => ReactNode;
  className?: string;
}

export function Each<T>({ of, render, className }: EachProps<T>): ReactNode {
  return (
    <div className={className}>
      {Children.toArray(of.map((item: T, index: number) => render(item, index)))}
    </div>
  );
}
