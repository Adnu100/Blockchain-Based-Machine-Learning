export function gradientDescent(data, line, options) {
  let m = line.slope;
  let b = line.intercept;
  const { learningRate } = options;
  for (let i = 0; i < data.length; i++) {
    let x = data[i].x;
    let y = data[i].y;
    let guess = m * x + b;
    let error = y - guess;
    m = m + error * x * learningRate;
    b = b + error * learningRate;
  }
  return { slope: m, intercept: b };
}
