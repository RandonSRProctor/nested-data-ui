export function makeArrayOfKeys(nodeValue: object | undefined): string[] {
  if (!nodeValue) {
    return [];
  }
  if (typeof nodeValue === 'object') {
    return Object.keys(nodeValue);
  }
  return [];
}
