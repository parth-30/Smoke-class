class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.tragectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    
    if( this.body.velocity.x>10 && this.body.position.x>205 ){
      var position = [this.body.position.x,this.body.position.y]
      this.tragectory.push(position);
    }
    super.display();
    for(var i=0; i<this.tragectory.length;i=i+1){
      image(this.smokeImage,this.tragectory[i][0],this.tragectory[i][1])
    }
  }
}
