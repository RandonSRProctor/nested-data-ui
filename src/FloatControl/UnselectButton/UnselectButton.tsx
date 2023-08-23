import { Dispatch } from 'react';

type UnselectButtonProps = {
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
};

export function UnselectButton({
  depthOfFocus,
  setDepthOfFocus,
}: UnselectButtonProps) {
  const lowerDepthOfFocus = () =>
    depthOfFocus > -1 && setDepthOfFocus(depthOfFocus - 1);
  return (
    <button onClick={lowerDepthOfFocus} className="FloatControl__item">
      ⇣
    </button>
  );
}
