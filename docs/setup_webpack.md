---
id: setup-webpack
title: Building using Webpack
---

Building using Webpack is a good idea if you're building a web app and you
don't need to take emuto scripts as input in the browser. The main advantage is
that if you build your scripts using Webpack **you don't need to bundle in emuto
itself**.

## Installing emuto

Using yarn

```
yarn add --dev emuto emuto-loader
```

Using npm:

```
npm install --save-dev emuto emuto-loader
```

## Updating your Webpack config

You need to modify your webpack config:

```javascript
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.emu$/,
      loader: 'emuto-loader' // compiles emuto to JavaScript
    }]
  }
};
```

## Usage

You'll now be able to import emuto scripts:

```javascript
// index.js
import GreetUser from './greeting.emu';

console.log(GreetUser({user: 'John'}));
```
