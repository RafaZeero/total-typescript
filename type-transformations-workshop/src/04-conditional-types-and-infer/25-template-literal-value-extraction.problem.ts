import { Equal, Expect } from '../helpers/type-utils';

type Names = ['Matt Pocock', 'Jimi Hendrix', 'Eric Clapton', 'John Mayer', 'BB King'];

/**
 * Type helper extends two values ? return last value, else never
 */
type GetSurname<T> = T extends `${infer F} ${infer L}` ? L : never;

type tests = [
  Expect<Equal<GetSurname<Names[0]>, 'Pocock'>>,
  Expect<Equal<GetSurname<Names[1]>, 'Hendrix'>>,
  Expect<Equal<GetSurname<Names[2]>, 'Clapton'>>,
  Expect<Equal<GetSurname<Names[3]>, 'Mayer'>>,
  Expect<Equal<GetSurname<Names[4]>, 'King'>>,
];
