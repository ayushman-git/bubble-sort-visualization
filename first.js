let array;
let i = 0;
let sortedArr;

function setup() {
  createCanvas(innerWidth, innerHeight);
  array = new Array(width).fill().map(() => floor(random() * height));
  sortedArr = new Array(width).fill(false);
  i = array.length;
}

function draw() {
  background(35, 35, 35);
  if (i > 0) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    sortedArr[i] = true;
    i--;
  }
  for (let i in array) {
    stroke(42, 178, 138);
    line(i, height, i, height - array[i]);

    if (sortedArr[i]) {
      stroke(24, 98, 76);
      line(i, height, i, height - array[i]);
    }
  }
}
