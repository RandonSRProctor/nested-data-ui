export function deriveClassName(thisCardDepth: number, depthOfFocus: number) {
  switch (true) {
    case thisCardDepth < depthOfFocus:
      return 'Card--selected';
    case thisCardDepth === depthOfFocus:
      return 'Card--focused';
    case thisCardDepth !== 0:
      return 'Card--undecided';
    case thisCardDepth === 0:
      return 'Card--undecided--first';
    default:
      break;
  }
}
