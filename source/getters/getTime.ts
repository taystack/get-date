import { PossibleConstructors } from '../types'
import { getDate } from '../getters/getDate'

export const getTime = (
  date: PossibleConstructors
) => (typeof date === 'number' ? date : getDate(date).getTime())
