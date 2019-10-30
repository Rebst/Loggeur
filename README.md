# Loggeur

An easy-to-use NodeJs package to display stylized messages in the console

[![version](https://img.shields.io/npm/v/loggeur)](https://www.npmjs.com/package/loggeur)
[![license](https://img.shields.io/npm/l/loggeur)](https://github.com/Rebst/Loggeur/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dt/loggeur)](https://www.npmjs.com/package/loggeur)


```javascript
const loggeur = require('loggeur')

loggeur.done('example', { username: 'user' })
//=> DONE example { username: 'user' }
```

## Installation

    npm i loggeur

## Usage

```javascript
const loggeur = require('color')

loggeur.log('example')
//=> > example

loggeur.done('example', { username: 'user' })
//=> DONE example { username: 'user' }

loggeur.success('example')
//=> SUCCESS example

loggeur.info('example', ['element1', 'element2'])
//=> INFO example [ 'element1', 'element2' ]

loggeur.error('example')
//=> ERROR example

loggeur.warn('example', 'example2')
//=> WARN example example2
```

## License

MIT © [Rebst](https://github.com/Rebst)