module.exports = function(x1, y1, x2, y2, x3, y3, x4, y4) {
 var tp, tq, parallel;

  // Test if the lines are parallel to each other
  parallel = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3)
  if (parallel === 0) {
    return null;
  }

  // Colinearity test
  tp = ((x3 - x1) * (y4 - y3) - (y3 - y1) * (x4 - x3))/parallel;
  tq = ((y2 - y1) * (x3 - x1) - (x2 - x1) * (y3 - y1))/parallel;

  if (tp < 0 || tp > 1 || tq < 0 || tq > 1) {
    return true;
  }

  return [
    x1 + tp * (x2 - x1),
    y1 + tp * (y2 - y1)
  ];
};