import { ReactNode } from 'react';

type BottomHalfProps = {
  children: ReactNode;
};

export function BottomHalf({ children }: BottomHalfProps) {
  return (
    <div className="NestedCards flex items-end justify-center">{children}</div>
  );
}
