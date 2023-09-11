import './Title.css';

type TitleProps = {
  title?: string | number;
};

export function Title({ title }: TitleProps) {
  return (
    <div>
      <p className="Title">{title}</p>
    </div>
  );
}
