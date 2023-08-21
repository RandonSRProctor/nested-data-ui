type TitleProps = {
  title?: string;
};

export function Title({ title }: TitleProps) {
  return (
    <div>
      <p className="Card__title">{title || 'Title Missing'}</p>
    </div>
  );
}
