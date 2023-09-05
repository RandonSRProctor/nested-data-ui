import { Dispatch } from 'react';

type UnselectButtonProps = {
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
  selectedNodePath: (string | number)[];
  setSelectedNodePath: Dispatch<(string | number)[]>;
};

export function UnselectButton({
  depthOfFocus,
  setDepthOfFocus,
  selectedNodePath,
  setSelectedNodePath,
}: UnselectButtonProps) {
  const lowerDepthOfFocus = () => {
    depthOfFocus > -1 && setDepthOfFocus(depthOfFocus - 1);
    setSelectedNodePath(selectedNodePath.slice(0, -1));
  };
  return (
    <button onClick={lowerDepthOfFocus} className="FloatControl__item">
      ⇣
    </button>
  );
}
