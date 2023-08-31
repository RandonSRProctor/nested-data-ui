import { Title } from './Title/Title';

type TopHalfProps = {
  title: string;
};

export function TopHalf({ title }: TopHalfProps) {
  return (
    <div className="Card__top-half">
      <Title title={title} />
    </div>
  );
}