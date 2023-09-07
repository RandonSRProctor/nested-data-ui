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

export function Root({ title, data }: RootProps) {
  return <NodeCard nodeKey={title} nodeValue={data} pathToCard={[]} />;
}
