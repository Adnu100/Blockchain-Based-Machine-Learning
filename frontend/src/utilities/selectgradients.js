function getdistance(vec1, vec2) {
  let dotproduct = 1,
    len1 = 0,
    len2 = 0;
  let l = vec1.length;
  for (let i = 0; i < l; i++) {
    dotproduct += vec1[i] * vec2[i];
    len1 += vec1 * vec1;
    len2 += vec2 * vec2;
  }
  return dotproduct / Math.sqrt(len1 * len2);
}

export function withinN(gradients, model, N) {
  let distances = gradients.map((gradient) => getdistance(model, gradient));
  let s = 0,
    l = gradients.length;
  for (let i of distances) s += i;
  let average = s / gradients.length;
  let filteredgradients = [];
  for (let i = 0; i < l; i++)
    if (Math.abs(distances[i] - average) <= N)
      filteredgradients.push(gradients[i]);
  return filteredgradients;
}

export function nearestN(gradients, model, N) {
  let distances = gradients.map((gradient) => getdistance(model, gradient));
  let s = 0,
    l = gradients.length;
  for (let i of distances) s += i;
  let average = s / gradients.length;
  let darr = [];
  for (let i = 0; i < l; i++)
    darr.push({
      gradient: gradients[i],
      distance: Math.abs(distances[i] - average),
    });
  darr.sort((a, b) => a.distance - b.distance);
  return darr.slice(0, N).map((x) => x.gradient);
}
