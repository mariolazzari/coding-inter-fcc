# Coding Interview Prep

## Algorithms

These free programming exercises will teach you about some common algorithms that you will likely encounter in real life. They are a great opportunity to improve your logic and programming skills.

These algorithms are frequently used in job interviews to test a candidate's skills. We'll give you clear and concise explanations of how these different algorithms work so you can implement a solution for each one.

### Find the Symmetric Difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

```ts
// symmetric difference
export function symdiff(args: number[]) {
  return args;
}
```