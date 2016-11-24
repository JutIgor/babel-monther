# Babel-monther
> Babel-monther allowed you to use short notation for declaring list of months in array

# Install
```
$ npm install --save-dev babel-monther
```

# Usage

### .babelrc
```
{
  "plugins": ["babel-monther"]
}
```

### .js
```
const MONTHS = ['months-full']; => ['January', 'February', ...]
const MONTHS_SHORT = ['months-short']; => ['Jan', 'Feb', ...]
```