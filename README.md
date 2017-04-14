# TaggedLogger

Simple tagged logger for Typescript and Javascript

## Usage

> npm install @mcrowe/tagged-logger --save

```js
import TaggedLogger from '@mcrowe/tagged-logger'

const logger = new TaggedLogger('debug', ['string-tag', '%t', () => 'thunk'])

logger.info('hello', 'world')
// => [string-tag] [2017-01-01 00:00:00.0] [thunk] hello world
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

Build:

> npm run build

Publish to npm:

1. Update the version in `package.json`

2. Build using `npm run build`

3. Publish using `npm publish --access=public`

