import { RootNodeCardProps, RootNodeCard } from '../RootNodeCard';

type ChildrenNodeCardsProps = {
  cardTitles: string[];
  cardProps: RootNodeCardProps;
};
// TODO: Account for duplicate names.  For right now all must be unique
export function ChildrenNodeCards({
  cardTitles,
  cardProps,
}: ChildrenNodeCardsProps) {
  return (
    <div className="NestedCards flex items-end justify-center">
      {cardTitles.map(cardTitle => (
        <RootNodeCard title={cardTitle} key={cardTitle} {...cardProps} />
      ))}
    </div>
  );
}
