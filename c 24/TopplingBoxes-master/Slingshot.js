class Slingshot{
    constructor(bodyA,pointB)
    {
          var options = {
          bodyA:bodyA,
          pointB:pointB,
          length :10,
          stiffness : 0.04

          }
 this.pointB = pointB
          this.sling1 = Constraint.create(options)
          World.add(world,this.sling1)
    }
 fly (){
     this.sling1.bodyA = null
 }
    display()
    {
     if (
         this.sling1.bodyA
     )
        {var pointA = this.sling1.bodyA.position
        var pointB = this.pointB
        strokeWeight (4)
        fill ("black")
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        }

}

}

