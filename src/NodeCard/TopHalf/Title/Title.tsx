import './Title.css';

type TitleProps = {
  title?: string;
};

export function Title({ title }: TitleProps) {
  return (
    <div>
      <p className="Title">{title || 'Title Missing'}</p>
    </div>
  );
}
