# Javascript getDate

### [Documentation](https://taystack.github.io/get-date)

### Why?

`Moment.js` has been retired. It had math operations on dates. I think Math is helpful on Dates.

> With `moment`
```typescript
import moment from 'moment'
const now = Date.now()
const today = moment.utc(now)
const momentYesterday = today.subtract(1, 'days')
```

> With `@taystack/getDate`:
```typescript
import { getDate, subtractDays } from '@taystack/get-date' // es6
// const { getDate, subtractDays } = require('@taystack/get-date') // es6
const now = Date.now()
const today = getDate(now)
const getDateYesterday = subtractDays(now, 1)
```

### What else?

Some engineers prefer niladic/monadic functions opposed to interfacing with constructors directly. The following is an example of the difference between `new Date()` and `getDate` with respect to referential equality:


# Installation
```bash
npm i @taystack/get-date
```
