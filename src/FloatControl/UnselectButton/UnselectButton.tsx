import { useContext } from 'react';
import { Context } from '../../App';

export function UnselectButton() {
  const {
    depthOfFocus,
    setDepthOfFocus,
    selectedNodePath,
    setSelectedNodePath,
  } = useContext(Context);

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
