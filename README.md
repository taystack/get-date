# Javascript getDate
[![codecov](https://codecov.io/gh/taystack/get-date/branch/master/graph/badge.svg?token=NU4F2FT8KN)](https://codecov.io/gh/taystack/get-date)
![npm](https://img.shields.io/npm/v/@taystack/get-date?label=Latest%20version)

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
// const { getDate, subtractDays } = require('@taystack/get-date') // es5
const now = Date.now()
const today = getDate(now)
const getDateYesterday = subtractDays(now, 1)
```

### What else?

There are no dependencies. This is a small set of helpers for working with native Javascript `Date` objects.

# Installation
```bash
npm i @taystack/get-date
```

# API

  - [Getters](https://taystack.github.io/get-date/modules/getters.html)
    - [getDate](https://taystack.github.io/get-date/modules/getters.html#getdate)
    - [getDates](https://taystack.github.io/get-date/modules/getters.html#getdates)
    - [getTime](https://taystack.github.io/get-date/modules/getters.html#getTime)
  - [Equality](https://taystack.github.io/get-date/modules/equality.html)
    - [eq](https://taystack.github.io/get-date/modules/equality.html#eq)
    - [gt](https://taystack.github.io/get-date/modules/equality.html#gt)
    - [gte](https://taystack.github.io/get-date/modules/equality.html#gte)
    - [lt](https://taystack.github.io/get-date/modules/equality.html#lt)
    - [lte](https://taystack.github.io/get-date/modules/equality.html#lte)
  - [Math](https://taystack.github.io/get-date/modules/math.html)
    - [addDays](https://taystack.github.io/get-date/modules/math.html#adddays)
    - [addHours](https://taystack.github.io/get-date/modules/math.html#addhours)
    - [addMilliseconds](https://taystack.github.io/get-date/modules/math.html#addmilliseconds)
    - [addMinutes](https://taystack.github.io/get-date/modules/math.html#addminutes)
    - [addSeconds](https://taystack.github.io/get-date/modules/math.html#addseconds)
    - [addStep](https://taystack.github.io/get-date/modules/math.html#addstep)
    - [subtractDays](https://taystack.github.io/get-date/modules/math.html#subtractdays)
    - [subtractHours](https://taystack.github.io/get-date/modules/math.html#subtracthours)
    - [subtractMilliseconds](https://taystack.github.io/get-date/modules/math.html#subtractmilliseconds)
    - [subtractMinutes](https://taystack.github.io/get-date/modules/math.html#subtractminutes)
    - [subtractSeconds](https://taystack.github.io/get-date/modules/math.html#subtractseconds)
    - [subtractStep](https://taystack.github.io/get-date/modules/math.html#subtractstep)
  - [Humanize](https://taystack.github.io/get-date/modules/humanize.html)
    - [humanizeDay](https://taystack.github.io/get-date/modules/humanize.html#humanizeday)
    - [humanizeDifference](https://taystack.github.io/get-date/modules/humanize.html#humanizeDifference)
    - [humanizeMonth](https://taystack.github.io/get-date/modules/humanize.html#humanizemonth)
    - [humanizeStep](https://taystack.github.io/get-date/modules/humanize.html#humanizestep)
  - [TimeDelta](https://taystack.github.io/get-date/modules/timedelta.html)
    - [difference](https://taystack.github.io/get-date/modules/timedelta.html#difference)
    - [exclusiveRange](https://taystack.github.io/get-date/modules/timedelta.html#exclusiverange)
    - [inclusiveRange](https://taystack.github.io/get-date/modules/timedelta.html#inclusiverange)
    - [range](https://taystack.github.io/get-date/modules/timedelta.html#range)
  - [helpers](https://taystack.github.io/get-date/modules/math.html)
    - [leftPad](https://taystack.github.io/get-date/modules/math.html#leftpad)
    - [pluralize](https://taystack.github.io/get-date/modules/math.html#pluralize)

## Getters

### getDate

[getDate documentation](https://taystack.github.io/get-date/modules/getters.html#getdate)

```typescript
import { getDate } from '@taystack/get-date'
getDate()
// Same as new Date()
getDate(0)
// new Date(0) -> jan 1 1970
```

### getTime

[getTime documentation](https://taystack.github.io/get-date/modules/getters.html#gettime)

```typescript
import { getTime } from '@taystack/get-date'
getTime()
// Same as Date.now()
getTime(0)
// 0 -> Short-hand new Date(0).getTime()
```
