export function getCenteredSubset(array: number[], centeredNumber: number) {
  const index = array.indexOf(centeredNumber);

  if (index === -1) {
    return [];
  }

  let start;
  if (index === 0 || index === array.length - 1) {
    start = Math.max(0, index - 2);
  } else {
    start = Math.max(0, index - 1);
  }

  const end = Math.min(array.length, start + 3);

  return array.slice(start, end);
}
