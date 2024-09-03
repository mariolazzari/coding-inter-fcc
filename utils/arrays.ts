export function removeDuplicates<T>(arr: T[]): T[] {
  const set: Set<T> = new Set(arr);

  return [...set];
}
