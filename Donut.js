class Donut extends Elements {
  constructor() {
    super(0, 0);
    this.z = 0;
    this.scale = 1.5;
    this.color = [255, 255, 255];
    this.isClicked = false;
  }

  display() {
    push();
    translate(this.x, this.y, this.z); 
    rotateX(frameCount * 0.01); 
    rotateY(frameCount * 0.01);
    fill(this.color);
    scale(this.scale); 
    model(blenderModel); 
    pop();
  }

  clickAnimation() {
    if (this.isClicked) {
      this.color = [random(255), random(255), random(255)];
      setTimeout(() => {
        this.isClicked = false;
      }, 500);
    }
  }
}

function mousePressed() {
  for (let donut of donuts) {
    let d = dist(mouseX - width / 2, mouseY - height / 2, donut.x, donut.y);
    if (d < 100 * donut.scale) {
      donut.isClicked = true;
    }
  }
}