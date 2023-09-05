import { Dispatch } from 'react';
import { NodeCard } from '../NodeCard';

type RootProps = {
  title: string;
  data: object;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
  selectedNodePath: (string | number)[];
  setSelectedNodePath: Dispatch<(string | number)[]>;
};

export function Root({
  title,
  data,
  depthOfFocus,
  setDepthOfFocus,
  selectedNodePath,
  setSelectedNodePath,
}: RootProps) {
  return (
    <NodeCard
      title={title}
      nodeReference={data}
      pathToCard={[]}
      cardDepth={0}
      depthOfFocus={depthOfFocus}
      setDepthOfFocus={setDepthOfFocus}
      selectedNodePath={selectedNodePath}
      setSelectedNodePath={setSelectedNodePath}
    />
  );
}
