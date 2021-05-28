import { MinMaxScalar } from "./scalar";
import { addGradient } from "./addGradient";

function globalGradient(gradients, filter, model, N) {
  let filteredgradients = filter(gradients, model, N);
  let gg = Array(filteredgradients[0].length).fill(0),
    l = gradients[0].length;
  for (let i = 0; i < filteredgradients.length; i++)
    for (let j = 0; j < l; j++) gg[j] += filteredgradients[i][j];
  return gg;
}

function gradientsForSumSquareDistance(x, y, model) {
  let features = model.length,
    rows = x.length;
  let terms = Array(rows);
  for (let i = 0; i < rows; i++) {
    let r = x[i],
      t = y[i];
    let s = 0;
    for (let j = 0; j < features; j++) s += r[j] * model[j];
    terms[i] = t - s;
  }
  let gradients = Array(features);
  for (let j = 0; j < features; j++) {
    let s = 0;
    for (let i = 0; i < rows; i++) s += x[i][j] * terms[i];
    gradients[j] = -2 * s;
  }
  return gradients;
}

export function gradientDescent(
  web3,
  x,
  y,
  learningRate = 0.001,
  maxIter = 5000,
  thresholdStepSize = 0.00001,
  initialVector = null,
  scale = true
) {
  console.log(x);
  console.log(y);
  if (scale) {
    MinMaxScalar.scaledata(x);
    y = new MinMaxScalar(y).getscaled();
  }
  x = x.map((arr) => [1].concat(arr));
  let model;
  if (initialVector === null) model = Array(x[0].length).fill(1);
  else model = [1].concat(initialVector);
  let stepSize = 100000;
  let iterationCount = 0;
  (function process_iterator() {
    if (Math.abs(stepSize) > thresholdStepSize && iterationCount < maxIter) {
      let gradients = gradientsForSumSquareDistance(x, y, model);
      let maxStepSize = 0;
      for (let i = 0; i < gradients.length; i++) {
        let currentStepSize = learningRate * gradients[i];
        model[i] -= currentStepSize;
        if (currentStepSize > maxStepSize) maxStepSize = currentStepSize;
      }
      addGradient(web3, {
        slope: model[1].toString(),
        intercept: model[0].toString(),
      });
      iterationCount++;
      setTimeout(process_iterator, 10);
    }
  })();
  return model;
}
