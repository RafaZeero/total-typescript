import { Equal, Expect } from '../helpers/type-utils'

export type Event =
  | {
      type: 'click'
      event: MouseEvent
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }

type MyExclude<T, P> = T extends P ? never : T
type NonKeyDownEvents = MyExclude<Event, { type: 'keydown' }>

type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      { type: 'click'; event: MouseEvent } | { type: 'focus'; event: FocusEvent }
    >
  >,
]
