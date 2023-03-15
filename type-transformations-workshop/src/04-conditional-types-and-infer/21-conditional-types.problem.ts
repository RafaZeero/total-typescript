import { Equal, Expect } from '../helpers/type-utils';

type YouSayGoodbyeAndISayHello<S extends string> = S extends 'hello'
  ? 'goodbye'
  : S extends 'goodbye'
  ? 'hello'
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
];
