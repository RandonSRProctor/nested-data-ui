import { Dispatch } from 'react';
import './FloatControl.css';
import { UnselectButton } from './UnselectButton/UnselectButton';

type FloatControlProps = {
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
};

export function FloatControl({ depthOfFocus, ...props }: FloatControlProps) {
  return (
    <div className="FloatControl">
      <div className="FloatControl__item">{depthOfFocus}</div>
      <UnselectButton depthOfFocus={depthOfFocus} {...props} />
    </div>
  );
}
