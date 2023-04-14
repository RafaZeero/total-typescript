import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

// this works as well!!
//
// const fetchData = async <T>(url: string): Promise<T> => {
//   const data = await fetch(url).then((response) => response.json());
//   return data;
// };

const fetchData = async <TData>(url: string) => {
  const data: TData = await fetch(url).then(response => response.json());
  return data;
};

it('Should fetch data from an API', async () => {
  const data = await fetchData<{ name: string }>('https://swapi.dev/api/people/1');
  expect(data.name).toEqual('Luke Skywalker');

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
