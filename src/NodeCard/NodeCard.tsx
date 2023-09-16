import { useContext } from 'react';
import { Context } from '../JSONVisualizer';
import './Card.css';
import { deriveClassName } from './utils';
import { BottomHalf } from './BottomHalf/BottomHalf';
import { ChildrenNodeCards } from './BottomHalf/ChildrenNodeCards/ChildrenNodeCards';
import { TopHalf } from './TopHalf/TopHalf';
import { Title } from './TopHalf/Title/Title';

export type NodeCardProps = {
  nodeKey: string | number;
  nodeValue: any[] | object;
  breadcrumbs: (string | number)[];
  numberOfSiblingsPlusSelf: number;
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
  nodeKey,
  nodeValue: thisNodeValue,
  breadcrumbs,
  numberOfSiblingsPlusSelf,
}: NodeCardProps) {
  const {
    depthOfFocus = 0,
    setDepthOfFocus,
    selectedNodePath,
    setSelectedNodePath,
  } = useContext(Context);

  const thisCardDepth = breadcrumbs.length;
  const cardClassName = deriveClassName(
    thisCardDepth,
    depthOfFocus,
    selectedNodePath,
    breadcrumbs
  );
  const isFocused = cardClassName === 'Card--focused';

  function focusOnCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (cardClassName === 'Card--undecided') {
      event.stopPropagation();
      setDepthOfFocus(thisCardDepth);
      setSelectedNodePath([...breadcrumbs]);
    }
  }

  let style = {};
  const percentOfWidth = 100 / numberOfSiblingsPlusSelf;
  if (cardClassName === 'Card--undecided') {
    style = { width: `${percentOfWidth}%` };
  }

  return (
    <div
      onClick={focusOnCard}
      className={` ${cardClassName} Card flex flex-col items-center justify-end`}
      style={style}
    >
      <TopHalf isFocused={isFocused}>
        <Title title={nodeKey} />
      </TopHalf>
      <BottomHalf>
        <ChildrenNodeCards
          breadcrumbsToParentNodeKey={breadcrumbs}
          parentNodeValue={thisNodeValue}
        />
      </BottomHalf>
    </div>
  );
}

/*
 For debugging:
        <p>Depth: {thisCardDepth}</p>
        <p>This Card Path: {pathToCard}</p>
        <p>Cuurent Selected Node Path: {selectedNodePath}</p>
 */
