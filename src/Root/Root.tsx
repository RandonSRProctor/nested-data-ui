import { Dispatch } from 'react';
import { NodeCard } from '../NodeCard';

type RootProps = {
  title: string;
  data: object;
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number>;
};

export function Root({
  title,
  data,
  depthOfFocus,
  setDepthOfFocus,
}: RootProps) {
  return (
    <NodeCard
      title={title}
      nodeReference={data}
      cardDepth={0}
      depthOfFocus={depthOfFocus}
      setDepthOfFocus={setDepthOfFocus}
    />
  );
}
