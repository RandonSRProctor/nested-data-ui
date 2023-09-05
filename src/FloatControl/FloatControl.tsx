import { useContext } from 'react';
import { Context } from '../App';
import './FloatControl.css';
import { UnselectButton } from './UnselectButton/UnselectButton';

export function FloatControl() {
  const { depthOfFocus } = useContext(Context);
  return (
    <div className="FloatControl">
      <div className="FloatControl__item">{depthOfFocus}</div>
      <div className="FloatControl__item">Log</div>
      <UnselectButton />
    </div>
  );
}
