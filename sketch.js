// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM
let stars = [];

let speed;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  rect(100, 100, 100, 100);
  speed = map(mouseX, 0, width, 0, 50);
  background(150);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
