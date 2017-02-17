# rn-maps-polyline
[![npm](https://img.shields.io/npm/v/rn-maps-polyline.svg?style=flat-square)](https://npmjs.com/package/rn-maps-polyline)
[![npm](https://img.shields.io/npm/l/rn-maps-polyline.svg?style=flat-square)](https://npmjs.com/package/rn-maps-polyline)
[![npm](https://img.shields.io/npm/dm/rn-maps-polyline.svg?style=flat-square)](https://npmjs.com/package/rn-maps-polyline)

A tiny library to use polyline in react-native-maps, it adapt the output from google-polyline to the input that MapView.Polyline needs

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save rn-maps-polyline
```

## Usage

```js
import RNPolyline  from 'rn-maps-polyline'
```
or

```js
var RNPolyline  = require('rn-maps-polyline')
```
```js
RNPolyline.encode([
  { latitude: 37.772, longitude: -122.214 },
  { latitude: 21.291, longitude: -157.821 },
  { latitude: -18.142, longitude: 178.431 },
  { latitude: -27.467, longitude: 153.027 }
])

> '_jpeFn||hVf}qcBvnixEfwtoF_fic_Afh|w@~u`zC'
```

```js
RNPolyline.decode('_jpeFn||hVf}qcBvnixEfwtoF_fic_Afh|w@~u`zC')

> [
  { latitude: 37.772, longitude: -122.214 },
  { latitude: 21.291, longitude: -157.821 },
  { latitude: -18.142, longitude: 178.431 },
  { latitude: -27.467, longitude: 153.027 }
  ]
```
## Contribute
The project is using babel and uglifyjs to compile so make sure you have both if you want to clone the repo
