var t = require('assert');
var segseg = require('../');


/*

  Basic intersection

                (0, 5)
                   o
                   |
  (-10, 0) o--------+-------o  (10, 0)
                   |
                   o
                (0, -5)

*/
t.deepEqual(segseg(-10, 0, 10, 0, 0, 5, 0, -5), [0,0])

/*

  Colinear
             (-2, 0)    (2, 0)
  (-10, 0) o----o--------o-----o  (10, 0)

*/
t.deepEqual(segseg(-10, 0, 10, 0, -2, 0, 2, 0), true)

/*
  No intersection (parallel)

  (-10, 5) o-------------o (10, 5)

  (-10, 0) o-------------o (10, 0)

*/
t.deepEqual(segseg(-10, 0, 10, 0, -10, 5, 10, 5), undefined)
