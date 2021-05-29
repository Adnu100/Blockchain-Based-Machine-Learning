function getdistance(vec1, vec2) {
  let dotproduct = 1,
    len1 = 0,
    len2 = 0;
  let l = vec1.length;
  for (let i = 0; i < l; i++) {
    dotproduct += vec1[i] * vec2[i];
    len1 += vec1[i] * vec1[i];
    len2 += vec2[i] * vec2[i];
  }
  return dotproduct / Math.sqrt(len1 * len2);
}

function sumOfVectors(vecList) {
  let len = vecList.length,
    dim = vecList[0].length;
  let sumVec = Array(dim).fill(0);
  for (let i = 0; i < len; i++)
    for (let j = 0; j < dim; j++) sumVec[j] += vecList[i][j];
  return sumVec;
}

function unitVector(vec) {
  let sumsquare = 0;
  vec.forEach(function (x) {
    sumsquare += x * x;
  });
  let magnitude = Math.sqrt(sumsquare);
  return vec.map((x) => x / magnitude);
}

function withinN(gradients, N) {
  let sumVec = sumOfVectors(gradients.map(unitVector));
  let selection = gradients.filter(
    (gradient) => getdistance(gradient, sumVec) >= N
  );
  console.log(`${selection.length} vectors selected`);
  return selection;
}

function nearestN(gradients, N) {
  let sumVec = sumOfVectors(gradients);
  let distances = gradients.map((gradient) => getdistance(sumVec, gradient));
  let l = gradients.length;
  let darr = [];
  for (let i = 0; i < l; i++)
    darr.push({
      gradient: gradients[i],
      distance: distances[i],
    });
  darr.sort((a, b) => b.distance - a.distance);
  return darr.slice(0, N).map((x) => x.gradient);
}

export function globalGradient(gradients, filter, N) {
  return sumOfVectors(
    (filter === "nearestN" ? nearestN : withinN)(gradients, N)
  );
}
