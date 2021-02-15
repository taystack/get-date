# Javascript getDate

### Why?

`Moment.js` has been retired. It had math operations on dates. I think Math is helpful on Dates.

```typescript
// with moment
const today = new Date()
const momentYesterday = moment(today).subtract(1, 'days')

// with getDate
const getDateYesterday = subtractDays(today, 1)
```

### What else?

Some engineers prefer niladic/monadic functions opposed to interfacing with constructors directly. The following is an example of the difference between `new Date()` and `getDate` with respect to referential equality:


# Installation
```bash
npm i @taystack/get-date
```
