import { Equal, Expect } from '../helpers/type-utils'

const makeQuery = (
  url: string,
  opts?: {
    method?: string
    headers?: {
      [key: string]: string
    }
    body?: string
  },
) => {}

type MyParams<TParams extends (...args: any) => any> = TParams extends (...args: infer R) => any
  ? R
  : never
type MakeQueryParameters = MyParams<typeof makeQuery>

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string
          headers?: {
            [key: string]: string
          }
          body?: string
        },
      ]
    >
  >,
]
