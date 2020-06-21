class paperBall{
    constructor(a,density){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(a-1,350,20,options);
        this.width = 40;
        this.height = 40;
        World.add(world,this.body);
    }
    display(){
        fill("orange");
        var pos = this.body.position;
        push();
		translate(pos.x, pos.y);
		ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}