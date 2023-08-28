import { Dispatch } from 'react';
import './Card.css';
import { Title } from './Title/Title';
import { deriveClassName, makeArrayOfKeys } from './utils';
import { NestedCards } from './NestedCards/NestedCards';

export type CardProps = {
  title?: string;
  nodeOfTree: any;
  depth?: number;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
};

export function Card({
  title,
  nodeOfTree,
  depth = 0,
  depthOfFocus = 0,
  setDepthOfFocus,
}: CardProps) {
  if (!nodeOfTree || typeof nodeOfTree !== 'object') {
    return <></>;
  }
  const contentKeyIndexesOrValues = makeArrayOfKeys(nodeOfTree);
  const cardClassName = deriveClassName(depth, depthOfFocus);

  function focusOnCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    setDepthOfFocus(depth);
  }

  return (
    <div
      onClick={focusOnCard}
      className={` ${cardClassName} Card flex flex-col items-center justify-end`}
    >
      <div className="Card__top-half">
        <Title title={title} />
      </div>

      <NestedCards
        cardTitles={contentKeyIndexesOrValues}
        cardProps={{
          depth: depth + 1,
          nodeOfTree: nodeOfTree[contentKeyIndexesOrValues[0]],
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
