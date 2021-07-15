class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            denisty:0.8
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        world.add(world.this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("silver");
        circle(this.body.position.x,this.body.position.y,this.radius);
    }
}