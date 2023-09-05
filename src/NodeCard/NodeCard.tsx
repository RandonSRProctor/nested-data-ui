import { useContext } from 'react';
import { Context } from '../App';
import './Card.css';
import { deriveClassName, makeArrayOfKeys } from './utils';
import { BottomHalf } from './BottomHalf/BottomHalf';
import { ChildrenNodeCards } from './BottomHalf/ChildrenNodeCards/ChildrenNodeCards';
import { TopHalf } from './TopHalf/TopHalf';
import { Title } from './TopHalf/Title/Title';

export type NodeCardProps = {
  title: string;
  nodeReference: any;
  pathToCard: (string | number)[];
  cardDepth: number;
};

/**
 * Revise to Branch Card?
 * A Node Card (One of the three types of Nodes) has
 * both a parent node and a child node that continues
 * the nesting pattern (is a data structure)
 *
 * A Branch Node is unlike a Root Node or Leaf Node, in
 * that the user can navigate bidirectionally without
 * hitting an end.
 */

export function NodeCard({
  title,
  nodeReference: thisNodeReference,
  pathToCard,
  cardDepth: thisCardDepth,
}: NodeCardProps) {
  const {
    depthOfFocus = 0,
    setDepthOfFocus,
    selectedNodePath,
    setSelectedNodePath,
  } = useContext(Context);

  if (!thisNodeReference || typeof thisNodeReference !== 'object') {
    return <></>;
  }
  const contentKeyIndexesOrValues = makeArrayOfKeys(thisNodeReference);
  const cardClassName = deriveClassName(
    thisCardDepth,
    depthOfFocus,
    selectedNodePath,
    pathToCard
  );

  function focusOnCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    setDepthOfFocus(thisCardDepth);
    setSelectedNodePath([...pathToCard]);
  }

  return (
    <div
      onClick={focusOnCard}
      className={` ${cardClassName} Card flex flex-col items-center justify-end`}
    >
      <TopHalf>
        <Title title={title} />
        {/* <p>Depth: {thisCardDepth}</p>
        <p>This Card Path: {pathToCard}</p>
        <p>Cuurent Selected Node Path: {selectedNodePath}</p> */}
      </TopHalf>
      <BottomHalf>
        <ChildrenNodeCards
          keys={contentKeyIndexesOrValues}
          nodeDepth={thisCardDepth + 1}
          pathToParentCard={pathToCard}
          parentNodeReference={thisNodeReference}
        />
      </BottomHalf>
    </div>
  );
}
