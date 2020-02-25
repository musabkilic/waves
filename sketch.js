let s = 60;
let T = 30;

function setup() {
  createCanvas(1200, 600);
}

function f(x){
  return s*sin((x+frameCount)/T);
}

function draw() {
  background(200);
  let y_prev = height/2;
  for(let x = 0; x < width; x++){
    line(x-1, y_prev, x, f(x)+height/2);
    y_prev = f(x)+height/2;
  }
}
