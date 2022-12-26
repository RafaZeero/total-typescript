import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

// type Record<T extends string | number | symbol, K> = { [P in T]: K}
type OBJRecord<T extends string | number | symbol, K> = { [P in T]: K}

type OBJReduce = OBJRecord<string, {name: string}>

const obj = array.reduce<OBJReduce>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});

it("Should resolve to an object where name is the key", () => {
  expect(obj).toEqual({
    John: {
      name: "John",
    },
    Steve: {
      name: "Steve",
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
