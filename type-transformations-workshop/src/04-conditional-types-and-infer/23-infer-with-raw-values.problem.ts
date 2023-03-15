import { Equal, Expect } from '../helpers/type-utils';
/**
 * Solution 01:  
 * Type helper <T> can be any, then if <T> extends { data: any }, return `T['data']`, else `never`
 *
 * Solution 02:  
 * Type helper <T> can be any, then if <T> extends { data: `infer D`}, return `D`, else `never`
 */
type GetDataValue<T> = T extends { data: any } ? T['data'] : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello'; age: 20 } }>, { name: 'hello'; age: 20 }>>,
];
