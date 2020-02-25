let sliderPeriod;
let T;
let s = 75;

function setup() {
  createCanvas(1000, 600);
  createP("Period(T): ");
  sliderPeriod = createSlider(5, width/2, width/3);
  createDiv("<p># Created by <a href='https://musab.me'>Musab Kılıç</a></p>");
}

function f(x){
  return -s*sin((x+frameCount)*2*PI/T);
}

function drawTextRotated(t, x, y){
  push();
  translate(x, y);
  rotate(-PI/2);
  text(t, 0, 0);
  pop();
}

function draw() {
  T = sliderPeriod.value();

  background(200);
  stroke(200);
  for(let i = 0; i <= 10; i++){
    drawTextRotated(width/10*i, max(10, min(width-10, width/10*i)), 30);
  }

  stroke(150);
  line(0, height/2, width, height/2);
  stroke(0, 0, 125);

  let y_prev = height/2;
  for(let x = 0; x < width; x++){
    line(x-1, y_prev, x, f(x)+height/2);
    y_prev = f(x)+height/2;
  }
}
