import { useContext } from 'react';
import { Context } from '../../JSONVisualizer';

export function UnselectButton() {
  const { decrementDepthOfFocus } = useContext(Context);

  return (
    <button onClick={decrementDepthOfFocus} className="FloatControl__item">
      ⇣
    </button>
  );
}
