class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1.0,
        'friction':0.2,
        'density':0.8,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    this.visibility = 255;

    World.add(world, this.body);
  }
  display(){

    if(this.body.speed<3) {
      this.body.display()
    }
    else{
      World.remove(world,this.body)
      push();
      this.visibility = this.visibility - 5
      tint(255,this.visibility);
      pop();
    }
    var pos =this.body.position;
    var angle = this.body.angle;
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(255,153,255);
    fill(255,0,102);
    rect(0, 0, this.width, this.height);
  }
}

  