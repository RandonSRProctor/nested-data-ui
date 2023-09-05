import { NodeCard } from '../../NodeCard';

export type ChildrenNodeCardsProps = {
  keys: string[];
  nodeDepth: number;
  pathToParentCard: (string | number)[];
  parentNodeReference: any;
};
// TODO: Account for duplicate names.  For right now all must be unique
export function ChildrenNodeCards({
  keys,
  nodeDepth: thisNodeDepth,
  parentNodeReference, // should we just derive the keys here instead?
  pathToParentCard,
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
        />
      ))}
    </>
  );
}
