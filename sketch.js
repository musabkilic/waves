let sliderWavelength, sliderFrequency, sliderAmplitude, sliderTrail;
let λ, f, A, trail, t;

function setup() {
  createCanvas(1000, 700);
  createP("Wavelength/Dalgaboyu: ");
  sliderWavelength = createSlider(5, width/2, width/3);
  createP("Frequency/Frekans: ");
  sliderFrequency = createSlider(0.1, 5, 0.5, 0.01);
  createP("Amplitude/Genlik: ");
  sliderAmplitude = createSlider(5, height/2, height/8);
  createP("Trail/İz: ");
  sliderTrail = createSlider(170, 250, 230);
  createDiv("<p>@<a href='https://musab.me'>Musab Kılıç</a></p>");
}

function w(x){
  return -A*sin((x+f*λ*t)*2*PI/λ);
}

function drawTextRotated(t, x, y){
  push();
  translate(x, y);
  rotate(-PI/2);
  text(t, 0, 0);
  pop();
}

function gradientLine(x1, y1, x2, y2, c1, c2){
  for(let x=x1; x<=x2; x++){
    for(let y=y1; y<=y2; y++){
      g = dist(x, y, x2, y2)/dist(x1, x2, y1, y2);
      c = lerpColor(c1, c2, g);
      stroke(c);
      point(x, y);
    }
  }
}

function draw() {
  λ = sliderWavelength.value();
  f = sliderFrequency.value();
  A = sliderAmplitude.value();
  trail = sliderTrail.value();
  t = millis()/1000;

  background(200, 200, 200, 255-trail);
  stroke(200);
  for(let i = 0; i <= 10; i++){
    //drawTextRotated(width/10*i, max(10, min(width-10, width/10*i)), 30);
  }

  stroke(150);
  line(0, height/2, width, height/2);
  for(let x = 0; x < width; x++){
    stroke(0, 200, 125, 6);
    line(x, height/2, x, w(x)+height/2);
    stroke(0, 0, 125, 120);
    line(x-1, w(x-1)+height/2, x, w(x)+height/2);
  }
}
