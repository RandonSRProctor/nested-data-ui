import { Dispatch } from 'react';
import './Card.css';
import { Title } from './Title/Title';

type CardOneProps = {
  title?: string;
  nodeOfTree: any;
  depth?: number;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
  setParentSelected?: Dispatch<boolean>;
};

export function Card({
  title,
  nodeOfTree,
  depth = 0,
  depthOfFocus = 0,
  setDepthOfFocus,
  setParentSelected,
}: CardOneProps) {
  const isSelected = depth < depthOfFocus;
  const isFocused = depth === depthOfFocus;

  if (!nodeOfTree || typeof nodeOfTree !== 'object') {
    return <></>;
  }
  const propertiesToDisplay = Object.keys(nodeOfTree);

  function focusOnCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    setParentSelected && setParentSelected(true);
    console.log(depth);
    setDepthOfFocus(depth);
  }

  return (
    <div
      onClick={focusOnCard}
      className={` 
      ${isFocused && 'Card--focused'}
      ${isSelected && 'Card--selected'} 
      ${!isFocused && !isSelected && depth !== 0 && 'Card--undecided'} 
      ${!isFocused && !isSelected && depth === 0 && 'Card--undecided--first'} 
      
      Card flex flex-col items-center justify-end`}
    >
      <div className="Card__top-half">
        <Title title={title} />
      </div>
      <div className="Card__bottom-half flex items-end justify-center">
        <Card
          title={propertiesToDisplay[0]} // Accomodate array at later point
          depth={depth + 1}
          nodeOfTree={nodeOfTree[propertiesToDisplay[0]]}
          depthOfFocus={depthOfFocus}
          setDepthOfFocus={setDepthOfFocus}
        />
      </div>
    </div>
  );
}
