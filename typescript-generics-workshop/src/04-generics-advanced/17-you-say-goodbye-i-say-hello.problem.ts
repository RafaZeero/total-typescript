import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type Hello = 'hello'
type Goodbye = 'goodbye'

function youSayGoodbyeISayHello<Greeting extends Hello | Goodbye>(
  greeting: Greeting
): Greeting extends Hello ? Goodbye : Hello {
  return (greeting === "goodbye" ? "hello" : "goodbye") as any;
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
