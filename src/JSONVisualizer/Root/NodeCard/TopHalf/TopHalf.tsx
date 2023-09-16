import { ReactNode, useContext } from 'react';
import { Context } from '../../../JSONVisualizer';

type TopHalfProps = {
  children: ReactNode;
  isFocused: boolean;
};

export function TopHalf({ children, isFocused }: TopHalfProps) {
  const { decrementDepthOfFocus } = useContext(Context);

  // function handleClick(event) {
  //   if (isFocused) {
  //     decrementDepthOfFocus();
  //   }
  // }

  return (
    <div
      className="Card__top-half"
      onClick={() => {
        if (isFocused) {
          decrementDepthOfFocus();
        }
      }}
    >
      {children}
    </div>
  );
}
