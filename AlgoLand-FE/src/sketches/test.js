
const c = Vue.createApp(Counter).mount('#counter')

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(parseInt(c.r));
  fill(255 - parseInt(c.r));
  textSize(25)
  textAlign(CENTER, CENTER)
  translate(width / 2, (millis() * 0.1) % height)
  rotate(sin(millis()*0.004)*0.2)
  text(
