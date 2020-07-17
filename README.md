# segseg

Intersection detection between two line segments in 2d space.


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

//                      seg1                      seg2
//                ┌-------------------┐   ┌-----------------┐
if (segseg(isect, [ -10, 0 ], [ 10, 0 ],  [ 0, 5 ], [ 0, -5 ])) {
    // there was a collision
    console.log('intersected!', isect.join(','))  // output: intersected! 0,0
}

```


## Node compatibility

This is a pure es module, and requires node v12+ to run. However if you're using a popular bundler such as rollup, webpack, etc. This should be compatible with most frontend setups too.


## Credits

This code was ported from Mukesh Prasad's [example implementation](http://www.realtimerendering.com/resources/GraphicsGems/gemsii/xlines.c) which was included in graphics gems 2.
