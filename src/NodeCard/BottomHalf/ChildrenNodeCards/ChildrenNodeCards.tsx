import { NodeCard } from '../../NodeCard';
import { Dispatch } from 'react';

export type ChildrenNodeCardsProps = {
  keys: string[];
  nodeDepth: number;
  pathToParentCard: (string | number)[];
  parentNodeReference: any;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
  selectedNodePath: (string | number)[];
  setSelectedNodePath: Dispatch<(string | number)[]>;
};
// TODO: Account for duplicate names.  For right now all must be unique
export function ChildrenNodeCards({
  keys,
  nodeDepth: thisNodeDepth,
  parentNodeReference, // should we just derive the keys here instead?
  pathToParentCard,
  depthOfFocus,
  setDepthOfFocus,
  selectedNodePath,
  setSelectedNodePath,
}: ChildrenNodeCardsProps) {
  return (
    <>
      {keys.map(key => (
        <NodeCard
          title={key}
          key={key}
          cardDepth={thisNodeDepth}
          pathToCard={[...pathToParentCard, key]}
          nodeReference={parentNodeReference[key]}
          depthOfFocus={depthOfFocus}
          setDepthOfFocus={setDepthOfFocus}
          selectedNodePath={selectedNodePath}
          setSelectedNodePath={setSelectedNodePath}
        />
      ))}
    </>
  );
}
