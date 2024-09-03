import { it, expect, describe } from "vitest";
import { sym } from "../../algo/symdiff";

describe("Symmetric Difference", () => {
  let res: number[] = [];

  it("should compute sym() = []", () => {
    res = sym();
    expect(res).toStrictEqual([]);
    expect(res.length).toBe(0);
  });

  it("should compute sym([1,1,2]) = [1,2]", () => {
    res = sym([1, 1, 2]);
    expect(res).toStrictEqual([1, 2]);
    expect(res.length).toBe(2);
  });

  // it("Symmetric difference", () => {
  //   res = sym();
  //   expect(res.length).toBe(0);

  //   res = sym([1, 1, 2]);
  //   expect(res.length).toBe(2);

  //   res = sym(arg1, arg2);
  //   expect(res).toBe(res1);
  //   expect(res.length).toBe(3);

  //   res = sym([...arg1, 3], arg2);
  //   expect(res).toBe(res1);
  //   expect(res.length).toBe(3);

  //   res = sym(arg1, [...arg2, 5]);
  //   expect(res).toBe(res1);
  //   expect(res.length).toBe(3);

  //   res = sym(arg3, arg4, res1);
  //   expect(res).toBe(res2);
  //   expect(res.length).toBe(3);

  //   res = sym([1, ...arg3], [2, ...arg4], [...res1, 5]);
  //   expect(res).toBe(res2);
  //   expect(res.length).toBe(3);

  //   res = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], arg1);
  //   expect(res).toBe([2, 3, 4, 6, 7]);
  //   expect(res.length).toBe(5);

  //   res = sym(
  //     [3, 3, 3, 2, 5],
  //     [2, 1, 5, 7],
  //     [3, 4, 6, 6],
  //     arg1,
  //     [5, 3, 9, 8],
  //     [1]
  //   );
  //   expect(res).toBe([1, 2, 4, 5, 6, 7, 8, 9]);
  //   expect(res.length).toBe(8);
  // });
});
