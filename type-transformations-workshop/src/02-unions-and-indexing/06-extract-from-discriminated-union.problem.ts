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

type MyExtract<T, K> = T extends K ? T : never
type ClickEvent = MyExtract<Event, { type: 'click' }>

type tests = [Expect<Equal<ClickEvent, { type: 'click'; event: MouseEvent }>>]
