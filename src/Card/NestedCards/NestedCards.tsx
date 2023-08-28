import { CardProps, Card } from '../Card';

type NestedCardsProps = {
  cardTitles: string[];
  cardProps: CardProps;
};
// TODO: Account for duplicate names.  For right now all must be unique
export function NestedCards({ cardTitles, cardProps }: NestedCardsProps) {
  return (
    <div className="NestedCards flex items-end justify-center">
      {cardTitles.map(cardTitle => (
        <Card title={cardTitle} key={cardTitle} {...cardProps} />
      ))}
    </div>
  );
}
