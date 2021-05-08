const generate = require("./gradients.js");
const select = require("./selectgradients.js");
const calculate = require("./globalgradient.js");

function gradientDescent(
  x,
  y,
  learningRate = 0.001,
  maxIter = 5000,
  thresholdStepSize = 0.00001,
  initialVector = null,
  scale = true
) {
  if (scale) {
    MinMaxScalar.scaledata(x);
    y = new MinMaxScalar(y).getscaled();
  }
  x = x.map((arr) => [1].concat(arr));
  if (initialVector === null) model = Array(x[0].length).fill(1);
  else model = [1].concat(initialVector);
  let stepSize = 100000;
  let iterationCount = 0;
  while (Math.abs(stepSize) > thresholdStepSize && iterationCount < maxIter) {
    let gradients = gradientsForSumSquareDistance(x, y, model);
    let maxStepSize = 0;
    for (let i = 0; i < gradients.length; i++) {
      let currentStepSize = learningRate * gradients[i];
      model[i] -= currentStepSize;
      if (abs(currentStepSize) > maxStepSize) maxStepSize = currentStepSize;
    }
    iterationCount++;
  }
  return model;
}
