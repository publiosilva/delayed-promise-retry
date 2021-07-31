# Welcome to delayed-promise-retry 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/publiosilva/delayed-promise-retry#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/publiosilva/delayed-promise-retry/graphs/commit-activity)
[![License: ISC](https://img.shields.io/github/license/publiosilva/delayed-promise-retry)](https://github.com/publiosilva/delayed-promise-retry/blob/master/LICENSE)

> A helper to execute a promise a certain number of times if it's throwing an exception, also inserting a delay between each attempt.

### 🏠 [Homepage](https://github.com/publiosilva/delayed-promise-retry#readme)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Examples

### Static delay

```js
const { delayedPromiseRetry } = require('delayed-promise-retry');

(async () => {
  const fn = async () => {
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
    throw new Error();
  };
  const retries = 3;
  const retryDelay = (retryNumber) => retryNumber * 1000; // the first value of retryNumber is 0

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

Copyright © 2021 [Publio Blenilio](https://github.com/publiosilva).

This project is [ISC](https://github.com/publiosilva/delayed-promise-retry/blob/master/LICENSE) licensed.
