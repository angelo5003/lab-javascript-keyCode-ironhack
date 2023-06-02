// rect (x value, y value, width value, height value)
let x = 0;
let y = 0;
const ARROW_RIGHT = 39; // all caps variable names means is relevant for all the application
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //   console.log("In draw");
  background("orange");
  rect(x, y, 50, 50);

  // if (keyIsDown(ARROW_RIGHT)) {
  //   x += 5;
  //   if (x > 500) {
  //     x = -50;
  //   }
  // } else if (keyIsDown(ARROW_DOWN)) {
  //   y += 5;
  //   if (y > 500) {
  //     y = -50;
  //   }
  // } else if (keyIsDown(ARROW_UP)) {
  //   y -= 5;
  //   if (y + 50 < 0) {
  //     y = 500;
  //   }
  // } else if (keyIsDown(ARROW_LEFT)) {
  //   x -= 5;
  //   if (x + 50 < 0) {
  //     x = 500;
  //   }
  // }
}

function keyPressed() {
  if (keyCode === ARROW_LEFT) {
    x -= 50;
  } else if (keyCode === ARROW_DOWN) {
    y += 50;
    if (y > 450) {
      y = 0;
    }
  } else if (keyCode === ARROW_UP) {
    y -= 50;
  } else if (keyCode === ARROW_RIGHT) {
    x += 50;
  }
  if (keyCode === 32) {
    y += 50;
  }
}
