# Welcome to delayed-promise-retry 👋
![Version](https://img.shields.io/badge/version-0.0.3-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/publiosilva/delayed-promise-retry#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/publiosilva/delayed-promise-retry/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/publiosilva/delayed-promise-retry)](https://github.com/publiosilva/delayed-promise-retry/blob/main/LICENSE)
[![Npm Downloads](https://img.shields.io/npm/dm/delayed-promise-retry.svg?style=flat-square)](http://npm-stat.com/charts.html?package=delayed-promise-retry)

> A helper to execute a promise a certain number of times if it's throwing an exception, also inserting a delay between each attempt.

### 🏠 [Homepage](https://github.com/publiosilva/delayed-promise-retry#readme)

## Install

```sh
npm install delayed-promise-retry
```

```sh
yarn add delayed-promise-retry
```

## Examples

### Static delay

```js
const { delayedPromiseRetry } = require('delayed-promise-retry');

(async () => {
  const fn = async () => {
    console.log('trying...');

    throw new Error();
  };
  const retries = 3;
  const retryDelay = 1000;

  try {
    await delayedPromiseRetry(fn, retries, retryDelay);
  } catch(error) {
    console.log(error);
  }
})();
```

### Custom delay

```js
const { delayedPromiseRetry } = require('delayed-promise-retry');

(async () => {
  const fn = async () => {
    console.log('trying...');

    throw new Error();
  };
  const retries = 3;
  const retryDelay = (retryNumber) => retryNumber * 1000;

  try {
    await delayedPromiseRetry(fn, retries, retryDelay);
  } catch(error) {
    console.log(error);
  }
})();
```

### Exponential delay

```js
const { delayedPromiseRetry, exponentialDelay } = require('delayed-promise-retry');

(async () => {
  const fn = async () => {
    console.log('trying...');

    throw new Error();
  };
  const retries = 3;

  try {
    await delayedPromiseRetry(fn, retries, exponentialDelay);
  } catch(error) {
    console.log(error);
  }
})();
```

## Author

👤 **Publio Blenilio**

* Github: [@publiosilva](https://github.com/publiosilva)
* LinkedIn: [@publio-blenilio-b97a2b130](https://linkedin.com/in/publio-blenilio-b97a2b130)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/publiosilva/delayed-promise-retry/issues). You can also take a look at the [contributing guide](https://github.com/publiosilva/delayed-promise-retry/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021-present [Publio Blenilio](https://github.com/publiosilva).

This project is [MIT](https://github.com/publiosilva/delayed-promise-retry/blob/master/LICENSE) licensed.
