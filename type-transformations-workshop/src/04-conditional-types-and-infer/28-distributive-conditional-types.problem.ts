import { Equal, Expect } from '../helpers/type-utils';

type Fruit = 'apple' | 'banana' | 'orange';

type GetFruit<T> = T extends 'apple' | 'banana' ? T : never;

type AppleOrBanana = GetFruit<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>];
