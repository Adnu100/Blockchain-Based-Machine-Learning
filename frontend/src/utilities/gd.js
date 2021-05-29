import { MinMaxScalar } from "./scalar";
import { addGradient } from "./addGradient";
import { getCurrentModel } from "./getCurrentModel";
import { globalGradient } from "./selectgradients";

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
  scale = true,
  nodeNumber = 1,
  totalNodes = 1
) {
  if (scale) {
    MinMaxScalar.scaledata(x);
    y = new MinMaxScalar(y).getscaled();
  }
  nodeNumber = Number.parseInt(nodeNumber);
  totalNodes = Number.parseInt(totalNodes);
  x = x.map((arr) => [1].concat(arr));
  let model;
  if (initialVector === null) model = Array(x[0].length).fill(1);
  else model = [1].concat(initialVector);
  let stepSize = 100000;
  let iterationCount = 0;
  let state = 1;
  let tolerate = 0;
  (function process_iterator() {
    if (Math.abs(stepSize) > thresholdStepSize && iterationCount < maxIter) {
      getCurrentModel(web3).then(function (result) {
        console.log(result);
        let slopesSplitted = result["0"].split(" ");
        let interceptsSplitted = result["1"].split(" ");
        let curNode = Number.parseInt(slopesSplitted[0]);
        model = [
          Number.parseFloat(slopesSplitted[1]),
          Number.parseFloat(interceptsSplitted[0]),
        ];
        console.log(
          `${state},  ${nodeNumber},  ${curNode}, ${typeof nodeNumber}`
        );
        if (state === 1 && curNode === nodeNumber) {
          slopesSplitted[0] = (curNode + 1).toString();
          let gradients = gradientsForSumSquareDistance(x, y, model);
          slopesSplitted.push(gradients[1].toString());
          interceptsSplitted.push(gradients[0].toString());
          console.log("slopesSplitted: ", slopesSplitted);
          console.log("interceptsSplitted: ", interceptsSplitted);
          addGradient(web3, {
            slope: slopesSplitted.join(" "),
            intercept: interceptsSplitted.join(" "),
            loopNumber: iterationCount,
          });
          iterationCount++;
          if (nodeNumber === 1) state = 2;
        } else if (state !== 1) {
          if (Number.parseInt(curNode) === totalNodes + 1) {
            let allintercepts = interceptsSplitted.slice(1);
            let allslopes = slopesSplitted.slice(2);
            let gradients = [];
            for (let i = 0; i < allslopes.length; i++)
              gradients.push([
                Number.parseFloat(allintercepts[i]),
                Number.parseFloat(allslopes[i]),
              ]);
            let globalgradient = globalGradient(
              gradients,
              "withinN",
              Math.cos(Math.PI / 4)
            );
            let maxStepSize = 0;
            for (let i = 0; i < globalgradient.length; i++) {
              let currentStepSize = learningRate * globalgradient[i];
              model[i] -= currentStepSize;
              if (currentStepSize > maxStepSize) maxStepSize = currentStepSize;
            }
            addGradient(web3, {
              slope: `1 ${model[1]}`,
              intercept: `${model[0]}`,
              loopNumber: iterationCount,
            });
            state = 1;
          }
        } else {
          tolerate++;
        }
        if (tolerate < 1000) setTimeout(process_iterator, 10);
      });
    }
  })();
  return model;
}
