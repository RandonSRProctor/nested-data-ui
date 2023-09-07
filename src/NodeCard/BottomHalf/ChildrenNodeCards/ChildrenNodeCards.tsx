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
  parentNodeReference, // should we just derive the keys here instead?
  pathToParentCard,
}: ChildrenNodeCardsProps) {
  return (
    <>
      {keys.map(key => (
        <NodeCard
          nodeKey={key}
          key={key}
          pathToCard={[...pathToParentCard, key]}
          nodeValue={parentNodeReference[key]}
        />
      ))}
    </>
  );
}
