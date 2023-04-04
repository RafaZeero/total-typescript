import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

type Params<P1, P2> = {
  a: P1;
  b: P2;
};

const returnBothOfWhatIPassIn = <P1, P2>(params: Params<P1, P2>) => {
  return {
    first: params.a,
    second: params.b
  };
};

it('Should return an object where a -> first and b -> second', () => {
  const result = returnBothOfWhatIPassIn({
    a: 'a',
    b: 1
  });

  expect(result).toEqual({
    first: 'a',
    second: 1
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
