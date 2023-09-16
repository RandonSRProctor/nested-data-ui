export function makeArrayOfKeys(
  nodeValue: object | any[]
): (string | number)[] {
  let arrayOfKeys: (string | number)[] = [];
  if (typeof nodeValue === 'object') {
    arrayOfKeys = Object.keys(nodeValue);
  }
  if (Array.isArray(nodeValue)) {
    arrayOfKeys = nodeValue.map((entry, index) => index);
  }
  return arrayOfKeys;
}
