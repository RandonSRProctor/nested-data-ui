import { ReactNode } from 'react';

type TopHalfProps = {
  children: ReactNode;
};

export function TopHalf({ children }: TopHalfProps) {
  return <div className="Card__top-half">{children}</div>;
}
