class Rope{
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=cosntraint.create(options);
        World.add(World.this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position
        strokeWeight(3)

        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;
        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointA.y+this.offsetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}