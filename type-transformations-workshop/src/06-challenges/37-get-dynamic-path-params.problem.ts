import { Equal, Expect } from '../helpers/type-utils';

type UserPath = '/users/:id';

type UserOrganisationPath = '/users/:id/organisations/:organisationId';

type Split<Value extends string, Separator extends string> = Value extends string
  ? Value extends `${infer Part1}${Separator}${infer Part2}`
    ? [Part1, ...Split<Part2, Separator>]
    : [Value]
  : never;

type ExtractPathParams<T extends string> = {
  [K in Split<T, '/'>[number] as K extends `:${infer A}` ? A : never]: string;
};

type Test = ExtractPathParams<UserPath>;

type Test2 = ExtractPathParams<UserOrganisationPath>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<Equal<ExtractPathParams<UserOrganisationPath>, { id: string; organisationId: string }>>
];
