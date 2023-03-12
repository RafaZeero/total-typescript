// Might come in handy!
// import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { Equal, Expect } from '../helpers/type-utils';

type Path = 'Users/John/Documents/notes.txt';

type Split<
  Value extends string,
  Separator extends string,
> = Value extends `${infer Part1}${Separator}${infer Part2}`
  ? [Part1, ...Split<Part2, Separator>]
  : [Value];

type SplitPath = Split<Path, '/'>;

type tests = [Expect<Equal<SplitPath, ['Users', 'John', 'Documents', 'notes.txt']>>];
