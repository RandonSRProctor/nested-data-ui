import { Dispatch, useState } from 'react';
import './Card.css';
import { Title } from './Title/Title';
import { UnselectButton } from './UnselectButton/UnselectButton';

type CardOneProps = {
  title?: string;
  nodeOfTree: any;
  depth?: number;
  setParentSelected?: Dispatch<boolean>;
};

export function Card({
  title,
  nodeOfTree,
  depth = 0,
  setParentSelected,
}: CardOneProps) {
  const [isSelected, setIsSelected] = useState(false);

  if (!nodeOfTree || typeof nodeOfTree !== 'object') {
    return <></>;
  }
  const propertiesToDisplay = Object.keys(nodeOfTree);

  function focusOnCard() {
    setParentSelected && setParentSelected(true);
    setIsSelected(true);
  }

  function unselectCard(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsSelected(false);
  }

  return (
    <div
      onClick={focusOnCard}
      className={`${
        isSelected ? 'Card--selected' : 'Card--undecided'
      } Card flex items-end justify-center`}
    >
      <Title title={title ? `${depth}) ${title}` : title} />
      <UnselectButton shouldShow={isSelected} onClick={unselectCard} />
      <Card
        title={propertiesToDisplay[0]} // Accomodate array at later point
        depth={depth + 1}
        nodeOfTree={nodeOfTree[propertiesToDisplay[0]]}
        setParentSelected={setIsSelected}
      />
    </div>
  );
}
