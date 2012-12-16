# segseg

Intersection detection between two line segments in 2d space

## Usage

```javascript
var segseg = require('segseg');
/*
                (0, 5)
                   |
  (-10, 0) ----------------  (10, 0)
                   |
                (0, -5)
*/
var isect = segseg(-10, 0, 10, 0, 0, 5, 0, -5);

console.log(isect.join(',')) // outputs: 0,0

```

### Colinearity

`segseg` returns true

### Parallel

`segseg` returns null