import { Equal, Expect } from "../helpers/type-utils";

const makeStatus = <TStatuses extends string>(statuses: Array<TStatuses>) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];
