import { removeDuplicates } from "../utils/arrays";

// symmetric difference
export function sym(...args: number[][]): number[] {
  if (args.length === 0) {
    return [];
  }

  if (args.length === 1) {
    return removeDuplicates(args[0]);
  }

  let res: number[] = removeDuplicates(args[0]);

  return res;
}
