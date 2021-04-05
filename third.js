const noOfCircles = 100;
let array;
let i = 0;
let sortedArr = new Array(noOfCircles).fill(false);

function setup() {
  createCanvas(innerWidth, innerHeight);
  array = new Array(noOfCircles)
    .fill()
    .map(() => floor(random(1, height - 50)));
  i = array.length;
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
    sortedArr[i] = true;
    i--;
  }

  for (let i in array) {
    stroke(50);
    noFill();
    circle(width / 2, height / 2, array[i]);

    if (sortedArr[i]) {
      stroke(150);
      noFill();
      circle(width / 2, height / 2, array[i]);
    }
  }
}
