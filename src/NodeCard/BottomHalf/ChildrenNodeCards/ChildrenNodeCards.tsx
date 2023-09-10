import { LeafNode } from '../../LeafNode/LeafNode';
import { NodeCard } from '../../NodeCard';
import { makeArrayOfKeys } from '../../utils';

export type ChildrenNodeCardsProps = {
  pathToParentCard: (string | number)[];
  parentNodeValue: any; // <- Intentional "any"!
};
// TODO: Account for duplicate names.  For right now all must be unique
export function ChildrenNodeCards({
  parentNodeValue,
  pathToParentCard,
}: ChildrenNodeCardsProps) {
  const isValuePrimitive =
    !Array.isArray(parentNodeValue) && typeof parentNodeValue !== 'object';

  if (isValuePrimitive) {
    return <LeafNode value={parentNodeValue} />;
  }

  const keys = makeArrayOfKeys(parentNodeValue); // This needs to be updated.  No longer needs typeguarding
  return (
    <>
      {keys.map(key => {
        return (
          <NodeCard
            nodeKey={key}
            key={key}
            pathToCard={[...pathToParentCard, key]}
            nodeValue={parentNodeValue[key]}
          />
        );
      })}
    </>
  );
}
