/**
 * Pluralize a word.
 * 
 * @param count: number of things.
 * @param singular: string singular version of the thing.
 * @param plural?: string optional pluralized version of a word.
 * 
 * pluralize(1, 'thing') => '1 thing'
 * pluralize(2, 'thing') => '2 things'
 * pluralize(0, 'thing', 'thangs') => '0 thangs'
 */
export const pluralize = (count: number, singular: string, plural?: string): string =>
  `${count} ${count === 1 ? singular : (plural ? plural : `${singular}s`)}`
