import { Equal, Expect } from '../helpers/type-utils';

type YouSayGoodbyeAndISayHello<S> = S extends string
  ? S extends 'hello'
    ? 'goodbye'
    : S extends 'goodbye'
    ? 'hello'
    : never
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'alright pal'>, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
