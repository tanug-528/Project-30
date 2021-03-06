class Box {
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("sprites/pink.png");
    World.add(world, this.body);
    this.Visibility - 255;
  }
  display(){
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility-this.visibility-5;
      tint(255,this.Visibility);
      image(this.image, this.body.positon.x, this.position.y, 50,50);
      pop();
    }
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

};
