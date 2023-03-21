# Total typescript

- This repo is to practice advanced typescript with exercises

# Cool stuff learned

- [Type Split String](#Split)
- [Pipe Function](#Pipe)

# Split

- Getting a string and separating it with a specific value within it. Similar to Javascript String method `.split()`. It returns an Array\<string\>.

Simple, without validation:

```ts
type Split<
  Value extends string,
  Separator extends string
> = Value extends `${infer Part1}${Separator}${infer Part2}`
  ? [Part1, ...Split<Part2, Separator>]
  : [Value];
```

Compact:

```ts
type Split<S extends string, D extends string> = S extends `${infer K}${D}${infer P}`
  ? [K, ...Split<P, D>]
  : [S];
```

Usage:

```ts
const url = 'github.com/RafaZeero/total-typescript' as const;

type GithubSplit = Split<typeof url, '/'>;

const githubSplit: GithubSplit = ['github.com', 'RafaZeero', 'total-typescript'];
```

# Pipe

- Make a pipeable function with reduce that accepts an array of functions.

<u>Two ways of doing that:</u>

With the `data` in the second argument: (This could also be called flow in fp-ts)

```ts
const pipe =
  (...fns: Array<(...args: any) => any>) =>
  (data: any) =>
    fns.reduce((value, fn) => fn(value), data);
```

With the `data` in the first argument, like fp-ts:

```ts
const pipe = (data: any, ...fns: Array<(...args: any) => any>) =>
  fns.reduce((value, fn) => fn(value), data);
```
