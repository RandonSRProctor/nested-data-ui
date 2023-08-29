import { NodeCardProps, NodeCard } from '../NodeCard';

type ChildrenNodeCardsProps = {
  cardTitles: string[];
  cardProps: NodeCardProps;
};
// TODO: Account for duplicate names.  For right now all must be unique
export function ChildrenNodeCards({
  cardTitles,
  cardProps,
}: ChildrenNodeCardsProps) {
  return (
    <div className="NestedCards flex items-end justify-center">
      {cardTitles.map(cardTitle => (
        <NodeCard title={cardTitle} key={cardTitle} {...cardProps} />
      ))}
    </div>
  );
}
