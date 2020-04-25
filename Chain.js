class Chain{
    construtor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.5,
            length : 200
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y)
    }
}
    