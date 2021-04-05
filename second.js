let array;
let i = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  array = new Array(width).fill().map(() => floor(random() * 255));
  i = array.length;
  console.log(array);
}

function draw() {
  background(0);

  if (i > 0) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    i--;
  }

  for (let i in array) {
    fill(array[i]);
    rect(i, 0, 2, height);
  }
}
