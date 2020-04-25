class Slingshot {
    constructor(bodyA1,bodyB1){
        var options = {
            bodyA : bodyA1,
            pointB : pointB1,
            stiffness,
            lengt50
        }
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        var pointA = this.slingshot.bodyA.posotion;
        var pointB = this.slingshot.pointB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,ppointB.x,pointB.y);
    }
}