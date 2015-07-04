# tempfile2

![Last version](https://img.shields.io/github/tag/Kikobeats/tempfile2.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/tempfile2/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/tempfile2)
[![Dependency status](http://img.shields.io/david/Kikobeats/tempfile2.svg?style=flat-square)](https://david-dm.org/Kikobeats/tempfile2)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/tempfile2.svg?style=flat-square)](https://david-dm.org/Kikobeats/tempfile2#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/tempfile2.svg?style=flat-square)](https://www.npmjs.org/package/tempfile2)
[![Gratipay](https://img.shields.io/gratipay/Kikobeats.svg?style=flat-square)](https://gratipay.com/~Kikobeats/)

> Get a random temp file path. much better. Compatible with [tempfile](https://github.com/sindresorhus/tempfile).

## Install

```bash
npm install tempfile2 --save
```

## Usage

```js
var tempfile2 = require('tempfile2');

tempfile({ext:'.png'});
//=> /var/folders/_1/tk89k8215ts0rg0kmb096nj80000gn/T/4049f192-43e7-43b2-98d9-094e6760861b.png

tempfile({path: '/my/custom/path/', ext:'.png'});
//=> /my/custom/path/4546h192-42b1-43b2-41d9-023e6730432c.png
```

## API

### tempfile({options})

#### path

Type: `string`

Optionally supply the root path.

#### ext

Type: `string`

Optionally supply an extension to append to the path.

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
