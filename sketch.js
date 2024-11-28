let formatH = 1082 / 2;
let formatL = 500 / 2;

let blenderModel;
let font;
let donuts = [];
let texts = [];
let nombreLigne = 10; 


function preload() {
  blenderModel = loadModel('assets/single_donut.obj', true);
  font = loadFont('assets/Poppins-Regular.ttf'); 
}

function setup() {
  createCanvas(formatL, formatH, WEBGL);

  donuts.push(new Donut()); 

  for (let i = 0; i < nombreLigne; i++) {
    texts.push(new Texte(i));
    
  }
}

function draw() {
  background(20);
  
  ambientLight(150); 
  directionalLight(255, 255, 255, 1, 1, -1);

  
  for (let donut of donuts) {
    donut.clickAnimation();
    donut.display();
  }

  for (let text of texts) {
    text.animation(); 
    text.display();  
  }
}




