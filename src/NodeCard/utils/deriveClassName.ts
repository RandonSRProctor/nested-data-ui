export function deriveClassName(
  thisCardDepth: number,
  depthOfFocus: number,
  selectedNodePath: (number | string)[],
  pathToCard: (number | string)[]
) {
  const isDeviant = testIsDeviant(selectedNodePath, pathToCard);

  switch (true) {
    case isDeviant:
      return 'Card--neglected';
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

/**
 * Determines if any keys in provided path are explicitly
 * different from the user's selected path.
 *
 * A card path with no deviant entries is not considered
 * deviant, even if it is shorter than the selected path
 */

function testIsDeviant(
  selectedNodePath: (number | string)[],
  pathToCard: (number | string)[]
) {
  if (selectedNodePath.length === 0 || pathToCard.length === 0) {
    // can't be deviant if nothing to compare
    return false;
  }
  for (let i = 0; i < pathToCard.length; i++) {
    if (selectedNodePath[i] === undefined) {
      // this means you have passed all possible failpoints
      return false;
    }
    if (selectedNodePath[i] !== pathToCard[i]) {
      // mismatch means failure
      return true;
    }
  }
}
