function globalGradient(gradients, filter, model, N) {
  let filteredgradients = filter(gradients, model, N);
  let gg = Array(filteredgradients[0].length).fill(0),
    l = gradients[0].length;
  for (let i = 0; i < filteredgradients.length; i++)
    for (let j = 0; j < l; j++) gg[j] += filteredgradients[i][j];
  return gg;
}

module.exports = globalGradient;
