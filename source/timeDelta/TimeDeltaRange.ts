import { DateRange, PossibleConstructors, Step } from '../types'
import { getDate } from '../getters/getDate'


const normalizedRangeArguments = (
  from: PossibleConstructors,
  to: PossibleConstructors,
): [Date, number] => ([
  getDate(getDate(from).getTime()),
  getDate(to).getTime()
])

type Comparator = (date: Date, endTime: number) => boolean

const exclusiveComparator: Comparator = (date: Date, endTime: number): boolean => (date.getTime() < endTime)
const inclusiveComparator: Comparator = (date: Date, endTime: number): boolean => (date.getTime() <= endTime)

export class TimeDeltaRange {
  end: PossibleConstructors
  endTime: number = new Date().getTime()
  inclusive: boolean = false
  max: number = 100000
  pointer: Date = new Date()
  start: PossibleConstructors
  step: Step = Step.Day
  values: DateRange = []

  constructor(
    start: PossibleConstructors,
    end: PossibleConstructors,
    step: Step = Step.Day,
    inclusive: boolean = false
  ) {
    this.start = start
    this.end = end
    this.step = step
    this.inclusive = inclusive
    this.createValues()
  }

  range() {
    let count: number = 0 // Allowing the dev to set an infinite loop here is dangerous...
    const comparator: Comparator = this.inclusive ? inclusiveComparator : exclusiveComparator
    while (comparator(this.pointer, this.endTime) && count++ < this.max) {
      this.values.push(this.pointer.getTime())
      this.pointer.setTime(this.pointer.getTime() + this.step)
    }
  }

  createValues() {
    const [pointer, endTime] = normalizedRangeArguments(this.start, this.end)
    this.pointer = pointer
    this.endTime = endTime
    this.values = []
    this.range()
  }

  setStep(step: Step) {
    this.step = step
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
