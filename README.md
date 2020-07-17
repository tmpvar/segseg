# segseg

Intersection detection between two line segments in 2d space

## Signature

`segseg(out, pos1, pos2, pos3, pos4)`

__returns__:

`true` if there is an intersection, `false` otherwise

if an intersection occurred, `out` gets the 2d point of intersection copied into it.

This function assumes 2d points are represented as `[ x, y ]`, which is compatible with the fantastic `gl-matrix` library.

## Usage

```javascript
import segseg from 'segseg'
/*
                (0, 5)
                   |
  (-10, 0) --------+-------  (10, 0)
                   |
                (0, -5)
*/
const isect = [ NaN, NaN ]

var intersects = segseg(isect, [-10, 0], [10, 0], [0, 5], [0, -5]);

console.log('intersects:', intersects, ' point:', isect.join(',')) // output:    intersect: true  point: 0,0

```


## Node compatibility

This is a pure es module, and requires node v12+ to run. However if you're using a popular bundler such as rollup, webpack, etc. This should be compatible with most frontend setups too.


## Credits

This code was ported from Mukesh Prasad's [example implementation](http://www.realtimerendering.com/resources/GraphicsGems/gemsii/xlines.c) which was included in graphics gems 2.
