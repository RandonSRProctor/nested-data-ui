import { Dispatch } from 'react';
import './Card.css';
import { Title } from './Title/Title';
import { deriveClassName, makeArrayOfKeys } from './utils';
import { ChildrenNodeCards } from './ChildrenNodeCards/ChildrenNodeCards';

export type NodeCardProps = {
  title?: string;
  nodeReference: any;
  cardDepth: number;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
};

export function NodeCard({
  title,
  nodeReference,
  cardDepth,
  depthOfFocus = 0,
  setDepthOfFocus,
}: NodeCardProps) {
  if (!nodeReference || typeof nodeReference !== 'object') {
    return <></>;
  }
  const contentKeyIndexesOrValues = makeArrayOfKeys(nodeReference);
  const cardClassName = deriveClassName(cardDepth, depthOfFocus);

  function focusOnCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    setDepthOfFocus(cardDepth);
  }

  return (
    <div
      onClick={focusOnCard}
      className={` ${cardClassName} Card flex flex-col items-center justify-end`}
    >
      <div className="Card__top-half">
        <Title title={title} />
      </div>

      <ChildrenNodeCards
        cardTitles={contentKeyIndexesOrValues}
        cardProps={{
          cardDepth: cardDepth + 1,
          nodeReference: nodeReference[contentKeyIndexesOrValues[0]],
          depthOfFocus: depthOfFocus,
          setDepthOfFocus: setDepthOfFocus,
        }}
      />
    </div>
  );
}

// TODO: Make a11y expanded part of logic
// Break "Card" into 3 types: "RootNode", "BranchNode", "EndNode"
// TODO: Distinguish "focused" from "selected"
