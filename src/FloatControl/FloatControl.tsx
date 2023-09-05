import { Dispatch } from 'react';
import './FloatControl.css';
import { UnselectButton } from './UnselectButton/UnselectButton';

type FloatControlProps = {
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
  selectedNodePath: (string | number)[];
  setSelectedNodePath: Dispatch<(string | number)[]>;
};

export function FloatControl({ depthOfFocus, ...props }: FloatControlProps) {
  return (
    <div className="FloatControl">
      <div className="FloatControl__item">{depthOfFocus}</div>
      <div className="FloatControl__item">Log</div>
      <UnselectButton depthOfFocus={depthOfFocus} {...props} />
    </div>
  );
}
