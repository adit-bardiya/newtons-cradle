class Roof {
    constructor(){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(170,300,240,50,options);
        this.width = 240;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        fill("orange");
        var pos = this.body.position;
        console.log(this.body.position.x);
        rect(pos.x,pos.y,this.width,this.height);
    }
}