export const pluralize = (count: number, singular: string): string => {
  return `${count} ${singular}${count === 1 ? '' : 's'}`
}
