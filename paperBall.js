class paperBall{
    constructor(a,density){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:2.4,
            density:density
        }
        this.body = Bodies.circle(a-1,350,20,options);
        this.width = 40;
        this.height = 40;
        World.add(world,this.body);
    }
    display(){
        fill("orange");
        var pos = this.body.position;
        
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}