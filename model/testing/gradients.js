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

module.exports = gradientsForSumSquareDistance;
