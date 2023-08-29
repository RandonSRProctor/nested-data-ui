import { Dispatch } from 'react';
import './Card.css';
import { deriveClassName, makeArrayOfKeys } from './utils';
import { BottomHalf } from './BottomHalf/BottomHalf';
import { ChildrenNodeCards } from './BottomHalf/ChildrenNodeCards/ChildrenNodeCards';
import { TopHalf } from './TopHalf/TopHalf';

export type NodeCardProps = {
  title: string;
  nodeReference: any;
  cardDepth: number;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
};

export function NodeCard({
  title,
  nodeReference: thisNodeReference,
  cardDepth: thisCardDepth,
  depthOfFocus = 0,
  setDepthOfFocus,
}: NodeCardProps) {
  if (!thisNodeReference || typeof thisNodeReference !== 'object') {
    return <></>;
  }
  const contentKeyIndexesOrValues = makeArrayOfKeys(thisNodeReference);
  const cardClassName = deriveClassName(thisCardDepth, depthOfFocus);

  function focusOnCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    setDepthOfFocus(thisCardDepth);
  }

  return (
    <div
      onClick={focusOnCard}
      className={` ${cardClassName} Card flex flex-col items-center justify-end`}
    >
      <TopHalf title={title} />
      <BottomHalf>
        <ChildrenNodeCards
          keys={contentKeyIndexesOrValues}
          nodeDepth={thisCardDepth + 1}
          parentNodeReference={thisNodeReference}
          depthOfFocus={depthOfFocus}
          setDepthOfFocus={setDepthOfFocus}
        />
      </BottomHalf>
    </div>
  );
}

// TODO: Make a11y expanded part of logic
// TODO: Confront node "any" type
// TODO: Distinguish "focused" from "selected"
