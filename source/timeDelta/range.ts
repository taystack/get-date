import { PossibleConstructors, Timeframe } from '../types'
import { getDate } from '../getters/getDate'


export type DateRange = number[]

const normalizedRangeArguments = (
  from: PossibleConstructors,
  to: PossibleConstructors,
): [Date, number] => ([
  getDate(getDate(from).getTime()),
  getDate(to).getTime()
])

const exclusiveComparator = (date: Date, endTime: number): boolean => (date.getTime() < endTime)
const inclusiveComparator = (date: Date, endTime: number): boolean => (date.getTime() <= endTime)

export class TimeDeltaRange {
  start: PossibleConstructors
  end: PossibleConstructors
  values: DateRange = []
  comparator: Function = exclusiveComparator
  timeframe: Timeframe = Timeframe.Day
  inclusive: boolean = false
  pointer: Date = new Date()
  endTime: number = new Date().getTime()

  constructor(
    start: PossibleConstructors,
    end: PossibleConstructors,
    timeframe: Timeframe = Timeframe.Day,
    inclusive: boolean = false
  ) {
    this.start = start
    this.end = end
    this.timeframe = timeframe
    this.inclusive = inclusive
    this.createValues()
  }

  range() {
    this.comparator = this.inclusive ? inclusiveComparator : exclusiveComparator
    this.timeframe = this.timeframe
    while (this.comparator(this.pointer, this.endTime)) {
      this.values.push(this.pointer.getTime())
      this.pointer.setTime(this.pointer.getTime() + this.timeframe)
    }
  }

  createValues() {
    const [pointer, endTime] = normalizedRangeArguments(this.start, this.end)
    this.comparator = this.inclusive ? inclusiveComparator : exclusiveComparator
    this.pointer = pointer
    this.endTime = endTime
    this.values = []
    this.range()
  }

  setTimeframe(timeframe: Timeframe) {
    this.timeframe = timeframe,
    this.createValues()
  }
  setInclusive(inclusive: boolean) {
    this.inclusive = inclusive
    this.createValues()
  }
  setStart(start: PossibleConstructors) {
    this.start = start
    this.createValues()
  }
  setEnd(end: PossibleConstructors) {
    this.end = end
    this.createValues()
  }
}

export const range = (
  from: PossibleConstructors,
  to: PossibleConstructors,
  timeframe: Timeframe = Timeframe.Day,
  inclusive: boolean = false
): DateRange => {
  return new TimeDeltaRange(from, to, timeframe, inclusive).values
}
