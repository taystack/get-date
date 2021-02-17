/**
 * Explicitly for displaying numbers with zero on the left
 */
export const leftPad = (value: number = 1, width: number = 2): string => {
  return value.toString().padStart(width, '0')
}
