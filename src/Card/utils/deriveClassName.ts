export function deriveClassName(depth: number, depthOfFocus: number) {
  switch (true) {
    case depth < depthOfFocus:
      return 'Card--selected';
    case depth === depthOfFocus:
      return 'Card--focused';
    case depth !== 0:
      return 'Card--undecided';
    case depth === 0:
      return 'Card--undecided--first';
    default:
      break;
  }
}
