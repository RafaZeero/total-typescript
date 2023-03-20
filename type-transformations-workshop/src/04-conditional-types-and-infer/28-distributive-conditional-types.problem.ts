import { Equal, Expect } from '../helpers/type-utils';

type Fruit = 'apple' | 'banana' | 'orange';

type AppleOrBanana = Fruit extends infer F ? (F extends 'apple' | 'banana' ? F : never) : 'no';

const test: AppleOrBanana = 'apple';
//     ^?

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>];
