import './LeafNode.css';

type LeafNodeProps = {
  value: string | number | undefined | null;
};

export function LeafNode({ value }: LeafNodeProps) {
  return <div className="LeafNode">{value}</div>;
}
