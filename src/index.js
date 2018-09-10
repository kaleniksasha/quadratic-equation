module.exports = function solveEquation(equation) {
  let match = equation.match(
    /(-?\d+) \* x\^2 (-|\+) (-?\d+) \* x (-|\+) (-?\d+)/
  );
  let a = Number(match[1]);
  let b = Number(match[2] + match[3]);
  let c = Number(match[4] + match[5]);
  let dsqrt = Math.sqrt(b * b - 4 * a * c);
  let x1 = Math.round((-b + dsqrt) / (2 * a));
  let x2 = Math.round((-b - dsqrt) / (2 * a));
  return x1 > x2 ? [x2, x1] : [x1, x2];
};
