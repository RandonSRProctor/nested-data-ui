import './LeafNode.css';

type LeafNodeProps = {
  value: string | number | undefined | null;
};

export function LeafNode({ value }: LeafNodeProps) {
  let nullishGuardedValue = value;
  if (value === null) {
    nullishGuardedValue = 'null';
  }
  if (value === undefined) {
    nullishGuardedValue = 'undefined';
  }
  return <div className="LeafNode">{nullishGuardedValue}</div>;
}
