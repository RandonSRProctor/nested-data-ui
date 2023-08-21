type UnselectButtonProps = {
  shouldShow: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function UnselectButton({ shouldShow, onClick }: UnselectButtonProps) {
  return shouldShow ? (
    <button onClick={onClick} className="Card__button">
      ⇣
    </button>
  ) : (
    <></>
  );
}
