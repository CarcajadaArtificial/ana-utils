# ana-utils

Utility functions for the Ana ecosystem. These functions follow design patterns I personally like.

## Core concepts

These are the fundamental ideas that the design decisions come from.

### Optional values with enforced defaults

I'll define this idea by example, this will expose my thought process when designing software patterns. Let's say we are building a website about movies and we designed a `Film` interface:

```Typescript
interface Film {
  /** The original film title in the original language using UTF-8 encoding. */
  title: string,
  /** Date formated to miliseconds from Unix Epoch. Main usage expects only day, 
   month, and year. Defaults to 00:00 for the time, and to Jan 1st in case only 
   the year is known. */
  dateReleased: number,
  /** Measured in minutes. */
  runtime: number,
  /** It is an array for movies with multiple directors. Include contribution 
   inside parenthesis, e.g. (uncredited) */
  directors: string[],
  /** Include contribution inside parenthesis, e.g. (based on novel by) */
  writers: string[]
}
```

Now we can use the `Film` interface to a function that does something with it, e.g. fetching a film from the DB, rendering a film, editing an existing film, etc. This would be an example film that passes the interface check.

```Typescript
const film: Film = {
 title: 'Fargo',
 dateReleased: 828939600000, /* Mar 8th, 1996 */
 runtime: 98,
 directors: ['Joel Coen', 'Ethan Coen (uncredited)'],
 writers: ['Joel Coen', 'Ethan Coen']
}
```
