import { Equal, Expect } from '../helpers/type-utils'

const myFunc = () => {
  return 'hello'
}

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyReturn<TFunc extends (...args: any) => any> = TFunc extends (...args: any) => infer R ? R : never
type MyFuncReturn = MyReturn<typeof myFunc>

type tests = [Expect<Equal<MyFuncReturn, string>>]
