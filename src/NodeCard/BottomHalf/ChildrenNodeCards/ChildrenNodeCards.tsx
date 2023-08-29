import { NodeCard } from '../../NodeCard';
import { Dispatch } from 'react';

export type ChildrenNodeCardsProps = {
  keys: string[];
  nodeDepth: number;
  parentNodeReference: any;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
};
// TODO: Account for duplicate names.  For right now all must be unique
export function ChildrenNodeCards({
  keys,
  nodeDepth: thisNodeDepth,
  parentNodeReference, // should we just derive the keys here instead?
  depthOfFocus,
  setDepthOfFocus,
}: ChildrenNodeCardsProps) {
  return (
    <>
      {keys.map(key => (
        <NodeCard
          title={key}
          key={key}
          cardDepth={thisNodeDepth}
          nodeReference={parentNodeReference[key]}
          depthOfFocus={depthOfFocus}
          setDepthOfFocus={setDepthOfFocus}
        />
      ))}
    </>
  );
}
