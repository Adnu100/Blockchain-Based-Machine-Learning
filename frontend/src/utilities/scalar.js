export class MinMaxScalar {
  constructor(arr) {
    this.arr = arr;
    let min = arr[0],
      max = arr[0];
    for (let num of arr) {
      if (num > max) max = num;
      if (num < min) min = num;
    }
    this.min = min;
    this.max = max;
  }

  getscaled() {
    let d = this.max - this.min;
    return this.arr.map((val) => (val - this.min) / d);
  }

  getoriginal(val) {
    return val * (this.max - this.min) + this.min;
  }

  static minmaxscalar(matrix, colno) {
    let min = matrix[0][colno],
      max = matrix[0][colno];
    for (let arr of matrix) {
      let num = arr[colno];
      if (num > max) max = num;
      if (num < min) min = num;
    }
    let d = max - min;
    return matrix.map((arr) => (arr[colno] - min) / d);
  }

  static scaledata(matrix) {
    let tot = matrix[0].length,
      rows = matrix.length;
    for (let i = 0; i < tot; i++) {
      let newarr = MinMaxScalar.minmaxscalar(matrix, i);
      for (let j = 0; j < rows; j++) {
        matrix[j][i] = newarr[j];
      }
    }
  }
}
