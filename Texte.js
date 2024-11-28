class Texte extends Elements {
  constructor(i) {
    super(formatL,i * 50 + 50);
    this.c = `It's more than a donut, it's a cult`; 
    this.s = random(1, 3); 
    this.d = i * 20 ; 
    
  }

  animation() {
    if (frameCount > this.d) {
      this.x -= this.s; 
      if (this.x < -500) { 
        this.x = formatL;
      }
    }
  }

  display() {
    
    push();
    translate(-formatL / 2, -formatH / 2, 100); 
    textFont(font); 
    textSize(32); 
    fill(255, 204, 0); 
    stroke(0); 
    strokeWeight(2);
    text(this.c, this.x, this.y); 
    pop();
  }


}
